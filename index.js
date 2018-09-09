/* Note from documentation (for reference)

    nutrition.ATTR_NAME.{min|max} : Set the range of allowed values for a given nutrition attribute (see below for the list of supported nutrition attributes) by setting a min and/or a max. If min or max are omitted, 0 and infinity are assumed. The values of the parameter change depending on the nutrition attribute being used.
        For example if you are looking for recipes with a lot of Potassium, try setting a min of 3000 mg and a max of the Daily Suggested Value of 3500 mg, append &nutrition.K.min=3&nutrition.K.max=3.5.
        For example: http://api.yummly.com/v1/api/recipes?_app_id=YOUR_ID&_app_key=YOUR_APP_KEY&q=onion+soup
        &nutrition.K.min=3&nutrition.K.max=3.5
        Remember to convert to grams from milligrams!
        Likewise, if you creating a filter recipes with no carbs that are high in protein, try appending &nutrition.CHOCDF.min=0&nutrition.CHOCDF.max=0
        &nutrition.PROCNT.min=20&nutrition.PROCNT.max=50.
        For example: http://api.yummly.com/v1/api/recipes?_app_id=YOUR_ID&_app_key=YOUR_APP_KEY&q=onion+soup
        &nutrition.CHOCDF.min=0&nutrition.CHOCDF.max=0
        &nutrition.PROCNT.min=20&nutrition.PROCNT.max=50
*/

let request = require('async-request');

async function returnRecipeObject(min,max,recipe,nutrient)
{
 let API_KEY=""; //Add API_KEY from dashboard
 let APP_ID="";  //Add APP_ID from dashboard
 let URL=` http://api.yummly.com/v1/api/recipes?_app_id=${APP_ID}&_app_key=${API_KEY}&q=${recipe}&nutrition.${nutrient}.min=${min}&nutrition.${nutrient}.max=${max}`;
 let response=await request(URL,{method:'GET'});
 console.log(response);
}

returnRecipeObject(3,5,"onion+soup","K");

