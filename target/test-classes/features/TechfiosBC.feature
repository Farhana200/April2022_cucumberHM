Feature: Techfios bank and cash New Accout Funchtionality



Scenario Outline: User should be able to login with valid creadentials and open a new accout
Given User is on the techfios login page
When User enters username "<username>"
When User enters password "<password>"
And User clicks on singin button
Then User should land on Dashboard page
And User clicks on bankCash
And User clicks on newAccount
And User enters accountTitle"<accountTitle>"in accounts page 
And User enters description "<description>"in a account page
And User enters initialBalance "<initialBalance>"in a account page
And User enters accountNumber "<accountNumber>"in a account page
And User enters contactPerson "<contactPerson>"in a account page 
And User enters phone "<phone>"in a account page 
And User enters inernatBankURL "<inernatBankURL>"in a account page
And User clicks on submitButton
Then User should be able to validate account created successfully 
 
Examples:
|username|password|accountTitle|description|initialBalance|accountNumber|contactPerson|phone|inernatBankURL|
|demo@techfios.com|abc123|Farhana420|New Account|$ 100.00|sa123456|ME|54312345|https:tectfios.com|

 