Feature:  Login


 @parcours1
  @smoke
  @valid
  Scenario: Successful login
    Given I open the login page "http://192.168.1.95:9091/admin/login/?next=/admin/"
    When I login with username "testeur_integration" and password "testeur_qa"
    Then I should be redirected to the dashboard

  @smoke
  @invalid 
  Scenario: Failed login with wrong credentials
    Given I open the login page "http://192.168.1.95:9091/admin/login/?next=/admin/"
    When I login with username "Admin" and password "wrongpassword"
    Then I should see an error message
