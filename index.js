var user = {

   photo: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
   phone: "0530577770",
   email: "sultanalbdr@gmail.com",
   location: "Riyadh",
   website: "www.sultan1.com",
   name:"sultan Albdr",
   jobtitle:"web developer",
   education: [
{

year:"2020 - 2024", uin:"najran", degree:"bachlore",

},
{

    year:"2029 - 2030", uin:"harvard", degree:"master",
}
   ],

skills: [

    "web devolper", "art" , "team work"
],

languages : [

    "arabic" , "english" 
],

experince: [

    {
        company:"saudi ground service", postion:"engineer" , date:"2023-present", tasks:[
            "experince costmer", "develop web site" , "mobile app" , "opration"
        ]

    },
    {
        company:"sihad company", postion:"engineer" , date:"2022", tasks:[
            "experince costmer", "develop web site" , "mobile app" , "opration"
        ]

    },
    {
        company:"saudi ground service", postion:"engineer" , date:"2023", tasks:[
            "experince costmer", "develop web site" , "mobile app" , "opration"
        ]

    },
],

References : [{
    name: "naif" , phoneNumber:"0512345678", postion:"product manager", email:'hr@gmail.com'
},
   
{
    name: "nmohammed" , phoneNumber:"0512345678", postion:"product manager",  email:'hr@gmail.com'
}
],

}

document.getElementById("cv-photo").src=user.photo
document.getElementById("phone").textContent=user.phone
document.getElementById("email").textContent=user.email
document.getElementById("location").textContent=user.location
document.getElementById("website").textContent=user.website

//job title

var education1=`${ user.education[0] .year} ${user.education[0].uin} \n ${user.education[0].degree}`
var education2=`${ user.education[1] .year} ${user.education[1].uin} \n ${user.education[1].degree}`
document.getElementById("education1").textContent=education1
document.getElementById("education2").textContent=education2

// 

var skills= document.getElementById("skill")
user.skills.forEach(x=>{
    var li= document.createElement("li")
    li.textContent= x
    skills.appendChild(li)
})

//

var languages= document.getElementById("languag")
user.languages.forEach(x=>{
    var li= document.createElement("li")
    li.textContent= x
    languages.appendChild(li)
})

//

document.getElementById("name").textContent=user.name
document.getElementById("jobtitle").textContent=user.jobtitle 

var workExperince=document.getElementById("workExperince")
user.experince.forEach(x => {
    var e =document.createElement("div")
    e.classList.add("workExperince")

})

const workExperienceDiv = document.getElementById('workExperince');
user.experince.forEach(e => {
    const expDiv = document.createElement('div');
    expDiv.classList.add('experience-item');
    
    const company = document.createElement('h3');
    company.textContent = `${e.company}`;
    
    const position = document.createElement('p');
    position.textContent = `${e.postion}`;
    
    const period = document.createElement('p');
    period.textContent = `${e.date}`;
    
    const tasksList = document.createElement('ul');
    e.tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        tasksList.appendChild(li);
    });

    expDiv.appendChild(company);
    expDiv.appendChild(position);
    expDiv.appendChild(period);
    expDiv.appendChild(tasksList);
    workExperienceDiv.appendChild(expDiv);
});

const referencesDiv = document.getElementById('references');
user.References.forEach(ref => {
    const refDiv = document.createElement('div');
    refDiv.classList.add('reference-item');
    
    const name = document.createElement('h3');
    name.textContent = `${ref.name}`;
    
    const position = document.createElement('p');
    position.textContent = `${ref.postion}`;
    
    const phone = document.createElement('p');
    phone.textContent = `Phone: ${ref.phoneNumber}`;
    
    const email = document.createElement('p');
    email.textContent = `Email: ${ref.email}`;

    refDiv.appendChild(name);
    refDiv.appendChild(position);
    refDiv.appendChild(phone);
    refDiv.appendChild(email);
    referencesDiv.appendChild(refDiv);
});