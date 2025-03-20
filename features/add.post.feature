Feature: Add Post Page

  @positive
  @parcours2
  @smoke
  @valid
  Scenario: Verify Add Post Page Elements
    Given I am on the dashboard "<env>" "<username>" "<password>"
    When I write the title "Title2" in  input field
    When I write the content "Content" in text area
    When I Click on Save button
    Then I am redirect to Dashboard

    @int
    Examples:
      | username              | password     | env                             |
      | testeur_integration   | testeur_qa   | http://int.siteinfos.com/admin/ |
      | testeur_integration_2 | testeur_qa_2 | http://int.siteinfos.com/admin/ |

    @rec
    Examples:
      | username              | password     | env                             |
      | testeur_integration   | testeur_qa   | http://rec.siteinfos.com/admin/ |
      | testeur_integration_2 | testeur_qa_2 | http://rec.siteinfos.com/admin/ |