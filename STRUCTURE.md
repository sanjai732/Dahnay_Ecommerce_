### OLD FRAMEWORK STRUCTURE BASED ON POM

1. pages -> login, register and forgot page -> only will have all locators 
2. fixtures -> all pages will be here from here it will get export
3. MainPage -> run all the test cases from here
4. data -> this json file contains all username, password and all values 


### NEW FRAMEWROK STRUCTURE

1. pages-> basepage -> all common functions will be here
        loginpage-> import basepage from pages
                    import baseurl from config.js
                    import elements from respective page object
                    import data from data.json 

2. page object -> it is nothing but elements from the respective page                     
3. fixtures -> connect all pages and export from here.
4. mainspec file  -> import fixture file
                     import data from data.json file 
                     import baseurl from config.js
                     import expect from @playwright/test
                     import elements from page object
5. data -> all values will contain and throw new error messages
6. config.js -> all url's and important information 
