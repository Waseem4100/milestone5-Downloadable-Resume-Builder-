//listing element 

document.getElementById(`resumeform`)?.addEventListener(`submit`, function(event){
    event.preventDefault();
   
       //type assertions
       const profilePictureinput = document.getElementById(
        `profilePicture`
    ) as HTMLInputElement;


       const nameElement = document.getElementById(`name`) as HTMLInputElement;
       const fathernameElement = document.getElementById(`fathername`) as HTMLInputElement;
       const emailElement = document.getElementById(`emial`) as HTMLInputElement;
       const phoneElement = document.getElementById(`phone`) as HTMLInputElement;
     

       const educationElement = document.getElementById(
        `education`
    ) as HTMLInputElement;
       const experienceElement = document.getElementById(
        `experience`
    ) as HTMLInputElement;
       const skillElement = document.getElementById(
        `skill`
    ) as HTMLInputElement;


       
   
       if(   nameElement && fathernameElement && emailElement && phoneElement && profilePictureinput && educationElement && experienceElement && skillElement )
        
        {
      //*********************************************************************** */      
           const Name = nameElement.value;
           const fathername = fathernameElement.value;
           const email = emailElement.value;
           const phone = phoneElement.value;

           const education = educationElement.value;

           const experience = experienceElement.value;

           const skill = skillElement.value;

           const profilePictureFile = profilePictureinput.files?.[0]
           const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

     //** *********************************************************************************/
        //    const username = usernameElement.value;
        //    const uniquepath = `resume/${username.replace(/\s+/g,'_')}_cv.html`
   
   
   
       //create resume
       const resumeoutput = `
       <div id = "resume" style="text-align: left; margin: 20px ";
    " >

       <h2>Resume</h2>
       ${profilePictureURL ? `<img src="${profilePictureURL}" alt = "profliePicture" class ="profilePicture">` : ''}
       <p><strong> Name: </strong> <span id ="edit-name" class="editable"> ${Name}</span></p>
       <p><strong>  Father Name: </strong><span id ="edit-fathername" class="editable">  ${fathername}</span></p>
       <p><strong> Email : </strong><span id ="edit-email" class="editable">  ${email}</span></p>
       <p><strong> phone no: </strong><span id ="edit-phone" class="editable">  ${phone}</span></p>
   
           <h3>Education </h3>
   
       <p id ="edit-education" class="editable"> ${education}</p>
       
           <h3>Experience </h3>
       <p id ="edit-experience" class="editable"> ${experience}</p>
   
           <h3 >Skill </h3>
       <p id ="edit-skill" class="editable"> ${skill}</p>
       

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
    downloadpdfbutton.textContent = "Download PDF"
    downloadpdfbutton.classList.add('downloadpdfbutton')
    downloadpdfbutton.addEventListener('click', () => {
        window.print()
    })   
    buttoncontainer.appendChild(downloadpdfbutton)

    //add shareable link button
    const sharelinkbutton = document.createElement(`button`)
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