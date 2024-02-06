Feature: The Komunal Website
  Scenario: As a user, I can see elements on homepage
    Given I am on the homepage
    And I see "Masukkan Alamat Email" on email field
    And I see "Masukkan Kata Sandi" on password field
    And I see "Deposan" on deposan lender
    And I see "Admin BPR" on deposan adminbpr
    And I see "Masuk" on signin button
    And I see "Lupa Kata Sandi?" on forgot password button
    And I see "Daftar Sekarang" on register now button

  Scenario Outline: As a user, I can see error messages on mandatory field
    Given I am on the homepage
    When I insert <username> and <password> of mandatory field on homepage
    And I submit data login
    Then I see <error_messages1> and <error_messages2> and <error_messages3> on mandatory field

    Examples: 
      | username       | password      | error_messages1           | error_messages2      | error_messages3                 |
      |                |               | Email harus diisi         | Password harus diisi |                                 |
      | sdfkb          |               | Format Email harus sesuai | Password harus diisi |                                 |
      | doni@gmail.com |               |                           | Password harus diisi |                                 |
      |                | abcGH12334794 | Email harus diisi         |                      |                                 |
      | doni@gmail.com | abcGH12334794 |                           |                      | Email atau password anda salah! |
  

  Scenario: As a new deposan, I want to register account member
    Given I am on the homepage
    When I activated deposan
    And I select daftar sekarang 
    Then I redirected to register page and see /signup on url-link

  Scenario: As a admin Bpr, I verify forgot password page
    Given I am on the homepage
    When I activated admin-Bpr
    And I forgot password 
    Then I redirected to forgot password page and see Lupa Password? of header