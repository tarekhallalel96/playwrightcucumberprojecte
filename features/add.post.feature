Feature: Add Post Page

  @positive
  @parcours2
  @smoke
  @valid
  @ignore 
  Scenario: Verify Add Post Page Elements
    Given I am on the dashboard "<env>" "<username>" "<password>"
    When I write the title "Title2" in  input field
    When I write the content "Content" in text area
    When I Click on Save button
    Then I am redirect to Dashboard

    @int
    Examples:
      | username              | password     | env                             |
      | testeur_integration   | testeur_qa   | http://192.168.1.95:9091/admin/ |
      | testeur_integration_2 | testeur_qa_2 | http://192.168.1.95:9091/admin/ |

    @rec
    Examples:
      | username              | password     | env                             |
      | testeur_integration   | testeur_qa   | http://192.168.1.95:9092/admin/ |
      | testeur_integration_2 | testeur_qa_2 | http://192.168.1.95:9092/admin/ |