   const stringUtils = {
        toCamelCase: function(str) {
            return str.toLowerCase().replaceAll(" ", "_");
        },

        isLongerThan: function(str, num) {
            return str.length > num;
        }
    };

    console.log(stringUtils.isLongerThan("Привет", 3)); 

    console.log(stringUtils.toCamelCase("Hello World Example")); 