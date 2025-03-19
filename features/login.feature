Feature: Login

  @parcours1 @smoke @valid @conn @positive
  Scenario Outline: Successful login
    Given I open the login page "<env>"
    When I login with username "<username>" and password "<password>"
    Then I should be redirected to the dashboard

    Examples:
      | username              | password     | env                             |
      | testeur_integration   | testeur_qa   | http://int.siteinfos.com/admin/ |
      | testeur_integration_2 | testeur_qa_2 | http://int.siteinfos.com/admin/ |

  @smoke @invalid @negative
  Scenario: Failed login with wrong credentials
    Given I open the login page "<env>"
    When I login with username "<username>" and password "<password>"
    Then I should see an error message

    Examples:
      | username                 | password     | env                     |
      | testeur_integration_faux | testeur_qa   | int.siteinfos.com/admin |
      | testeur_integration_2    | testeur_qa_2 | int.siteinfos.com/admin |
      | testeur_integration      | testeur_qa   | int.siteinfos.com/admin |
      | testeur_integration_2    | testeur_qa_2 | int.siteinfos.com/admin |
