//listing element 


document.getElementById(`resumeform`)?.addEventListener(`submit`, function(event){
    event.preventDefault();
   
       //type assertions

// ******************* PERSONAL INFORMATION  ********************       
const profilePictureinput = document.getElementById(
  `profilePicture`
) as HTMLInputElement;



       const nameElement = document.getElementById(`name`) as HTMLInputElement;

       const fathernameElement = document.getElementById(`fathername`) as HTMLInputElement;

       const emailElement = document.getElementById(`emial`) as HTMLInputElement;
       
       const phoneElement = document.getElementById(`phone`) as HTMLInputElement;
     
// ******************* EDUCTION  ********************
       const education1Element = document.getElementById(
        `education1`
    ) as HTMLInputElement;
    const education2Element = document.getElementById(
        `education2`
    ) as HTMLInputElement;
    const education3Element = document.getElementById(
        `education3`
    ) as HTMLInputElement;

// ******************* EXPERIENCE  ********************

       const experience1Element = document.getElementById(
        `experience1`
    ) as HTMLInputElement;
       const experience2Element = document.getElementById(
        `experience2`
    ) as HTMLInputElement;
       const experience3Element = document.getElementById(
        `experience3`
    ) as HTMLInputElement;

// ******************* SKILL  ********************

       const skill1Element = document.getElementById(
        `skill1`
    ) as HTMLInputElement;
    const skill2Element = document.getElementById(
        `skill2`
    ) as HTMLInputElement;
    const skill3Element = document.getElementById(
        `skill3`
    ) as HTMLInputElement;


       
   
       if( nameElement && fathernameElement && emailElement && phoneElement && profilePictureinput &&
         education1Element && education2Element && education3Element && 
         experience1Element && experience2Element && experience3Element &&
          skill1Element && skill2Element&& skill3Element )
        
        {
      //*********************************************************************** */  
    // ******************* PERSONAL INFORMATION  ********************      
           const Name = nameElement.value;
           const fathername = fathernameElement.value;
           const email = emailElement.value;
           const phone = phoneElement.value;

    // ******************* EDUCTION  ********************

           const education1 = education1Element.value;
           const education2 = education2Element.value;
           const education3 = education3Element.value;

    // ******************* EXPERIENCE  ********************

           const experience1 = experience1Element.value;
           const experience2 = experience2Element.value;
           const experience3 = experience3Element.value;


    // ******************* SKILLS  ********************
           const skill1 = skill1Element.value;
           const skill2 = skill2Element.value;
           const skill3 = skill3Element.value;

           const profilePictureFile = profilePictureinput.files?.[0]
           const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

     //** *********************************************************************************/
   
   
       //create resume
       const resumeoutput = `

    <H2 style="text-align:left;margin :0; display :inline;"> STATIC RESUME BY WASEEM AHMED</H2>
    <div  id ="Resume">


     <div id = "profilePicture"> ${profilePictureURL ? `<img src="${profilePictureURL}" alt = "profliePicture" class ="profilePicture">` : ''}</div> 



        <div id="personal information">
            <h2>PERSONAL INFORMATION</h2>
          
            <ul style=" font-weight: bold;"> 
            <li> Name : ${Name}</li>
            
            
            <li>FatherName : ${fathername} </li>
            
            
            <li> Email : ${email}</li>
            

            <li> Phone no : ${phone}</li>
        </ul>
        </div>
        <br>

        <div id="education">
       
            <h2>EDUCATION</h2>
            <ul style=" font-weight: bold;">
            <li>Degree :${education1} </li> 
            <li> Institute : ${education2} </li> 
            <li>Grade : ${education3} </li>
            </ul>
         </div>

         <div id="experience">
            <h2>EXPERIENCE</h2>
            <ul style=" font-weight: bold;">
                <li> Company Name :${experience1}</li>
                <li>Position : ${experience2}</li>
                <li>Duration : ${experience3}</li>
            </ul>
        </div>


     
   
       <div id="skills">
          <h2>SKILLS:</h2>
          <ul style=" font-weight: bold;">
          <li>${skill1} </li> 
          <li>${skill2} </li> 
          <li>${skill3} </li>       
          </ul>
        </div>



    </div>
   
 `
    //******************************************************************************* */

  


   
    // resume output 
    const resumeoutputElement = document.getElementById(`resumeoutput`)
    
    if (resumeoutputElement){
       resumeoutputElement.innerHTML = resumeoutput
       resumeoutputElement.classList.remove('hidden')
    


    // create  container for button 
    const buttoncontainer = document.createElement('div') ; 
    buttoncontainer.id ='buttoncontainer';
    resumeoutputElement.appendChild(buttoncontainer)

    //download pdf button
    const downloadpdfbutton = document.createElement(`button`)
    downloadpdfbutton.id ='downloadpdfbutton';
    downloadpdfbutton.textContent = "Download PDF"
    downloadpdfbutton.classList.add('downloadpdfbutton')
    downloadpdfbutton.addEventListener('click', () => {
        window.print()
    })   
    buttoncontainer.appendChild(downloadpdfbutton)

    //add shareable link button
    const sharelinkbutton = document.createElement(`button`)
    sharelinkbutton.id ='sharelinkbutton';
    sharelinkbutton.textContent = " copy Shareable Link"
    sharelinkbutton.classList.add('sharelinkbutton')
    sharelinkbutton.addEventListener('click',  () => {
        const shareableLink = window.location.href
        navigator.clipboard.writeText(shareableLink)
        alert("Link Copied to clipboard")
    })   
    buttoncontainer.appendChild(sharelinkbutton)


}
   
   }
    else{
       console.error("one or more  resume output elements are missing")
   
   }

   });

