document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Form field references
    const fields = {
        name: document.getElementById('name') as HTMLInputElement,
        email: document.getElementById('email') as HTMLInputElement,
        phone: document.getElementById('phone') as HTMLInputElement,
        address: document.getElementById('address') as HTMLInputElement,
        education: document.getElementById('education') as HTMLInputElement,
        experience: document.getElementById('experience') as HTMLInputElement,
        skills: document.getElementById('skills') as HTMLInputElement,
        profilePicture: document.getElementById('profilePicture') as HTMLInputElement
    };

    // Get All Values
    const { name, email, phone, address, education, experience, skills, profilePicture } = fields ;

    //  if all required fields are available
    if (name && email && phone && address && education && experience && skills && profilePicture) {
        
        const profilePicURL = profilePicture.files?.[0] ? URL.createObjectURL(profilePicture.files[0]) : '';
        const resumeHTML = `
            <h2 class="text-2xl font-semibold mb-4">Resume</h2>
            ${profilePicURL ? `<img src="${profilePicURL}" alt="Profile Picture" class="w-32 h-32 rounded-full mb-4">` : ''}
            <p><strong>Name:</strong> ${name.value}</p>
            <p><strong>Email:</strong> ${email.value}</p>
            <p><strong>Phone:</strong> ${phone.value}</p>
            <p><strong>Address:</strong> ${address.value}</p>
            <h3 class="mt-4 text-xl">Education</h3>
            <p>${education.value}</p>
            <h3 class="mt-4 text-xl">Work Experience</h3>
            <p>${experience.value}</p>
            <h3 class="mt-4 text-xl">Skills</h3>
            <p>${skills.value}</p>
        `;

        const resumeOutput = document.getElementById('resumeOutput');
        resumeOutput?.innerHTML = resumeHTML;
    } else {
        console.error('Missing form fields');
    }
});
