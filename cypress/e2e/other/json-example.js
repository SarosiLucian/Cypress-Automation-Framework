///<reference types = "Cypress" />

describe("Json object", () =>{

    it("Json object examples", () => {
        const exampleObject = {"key": "Lucian", "key2": "Sarosi"} // {} for json objects
        const exampleArrayOfValues = ["Andrei", "Marina", "Roxana"] // [] for array
        const exampleArrayOfObjects = [{"key": "Luke"}, {"key2": "Kevin"}, {"key3": "25"}]

        const users = {
            "firstName": "Calin",
            "lastName": "Popescu",
            "Age": 30,
            "Students": [
                {
                    "firstName": "Cosmina",
                    "lastName": "Ionescu",
                },
                {
                    "firstName": "Alina",
                    "lastName": "Suciu",
                },
            ]
        }
        
        
        cy.log(exampleObject["key"]) //Lucian
        cy.log(exampleObject["key2"]) // Sarosi

        cy.log(exampleArrayOfValues[0]) // Andrei
        cy.log(exampleArrayOfValues[1]) // Marina

        cy.log(users.Students[0].lastName)

        cy.log(exampleArrayOfObjects[0].key)
        cy.log(exampleArrayOfObjects[1].key2)
        cy.log(exampleArrayOfObjects[2].key3)
        
    })
});
