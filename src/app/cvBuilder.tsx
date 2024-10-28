// 'use client'

// import { useState } from 'react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Plus, Trash2 } from 'lucide-react'

// export default function CvBuilder() {
//   const [personalInfo, setPersonalInfo] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     summary: '',
//   })
   
      
//   const [education, setEducation] = useState([{ school: '', degree: '', year: '' }])
//   const [experience, setExperience] = useState([{ company: '', position: '', duration: '', description: '' }])
//   const [skills, setSkills] = useState([''])

//   const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value })
//   }

//   const handleEducationChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
//     const newEducation = education.map((edu, i) => {
//       if (i === index) {
//         return { ...edu, [e.target.name]: e.target.value }
//       }
//       return edu
//     })
//     setEducation(newEducation)
//   }

//   const handleExperienceChange = (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const newExperience = experience.map((exp, i) => {
//       if (i === index) {
//         return { ...exp, [e.target.name]: e.target.value }
//       }
//       return exp
//     })
//     setExperience(newExperience)
//   }

//   const handleSkillChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
//     const newSkills = skills.map((skill, i) => i === index ? e.target.value : skill)
//     setSkills(newSkills)
//   }

//   const addEducation = () => setEducation([...education, { school: '', degree: '', year: '' }])
//   const addExperience = () => setExperience([...experience, { company: '', position: '', duration: '', description: '' }])
//   const addSkill = () => setSkills([...skills, ''])

//   const removeEducation = (index: number) => setEducation(education.filter((_, i) => i !== index))
//   const removeExperience = (index: number) => setExperience(experience.filter((_, i) => i !== index))
//   const removeSkill = (index: number) => setSkills(skills.filter((_, i) => i !== index))

//   return (
//     <div className="container mx-auto p-4 space-y-8">
//       <h1 className="text-3xl font-bold text-center mb-8">CV Builder</h1>
      
//       <div className="grid md:grid-cols-2 gap-8">
//         <div className="space-y-8">
//           <Card>
//             <CardHeader>
//               <CardTitle>Personal Information</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <Input placeholder="Name" name="name" value={personalInfo.name} onChange={handlePersonalInfoChange} />
//               <Input placeholder="Email" name="email" type="email" value={personalInfo.email} onChange={handlePersonalInfoChange} />
//               <Input placeholder="Phone" name="phone" type="tel" value={personalInfo.phone} onChange={handlePersonalInfoChange} />
//               <Textarea placeholder="Professional Summary" name="summary" value={personalInfo.summary} onChange={handlePersonalInfoChange} />
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader>
//               <CardTitle>Education</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               {education.map((edu, index) => (
//                 <div key={index} className="space-y-2">
//                   <Input placeholder="School" name="school" value={edu.school} onChange={(e) => handleEducationChange(index, e)} />
//                   <Input placeholder="Degree" name="degree" value={edu.degree} onChange={(e) => handleEducationChange(index, e)} />
//                   <Input placeholder="Year" name="year" value={edu.year} onChange={(e) => handleEducationChange(index, e)} />
//                   <Button variant="destructive" size="sm" onClick={() => removeEducation(index)}><Trash2 className="w-4 h-4 mr-2" /> Remove</Button>
//                 </div>
//               ))}
//               <Button onClick={addEducation}><Plus className="w-4 h-4 mr-2" /> Add Education</Button>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader>
//               <CardTitle>Work Experience</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               {experience.map((exp, index) => (
//                 <div key={index} className="space-y-2">
//                   <Input placeholder="Company" name="company" value={exp.company} onChange={(e) => handleExperienceChange(index, e)} />
//                   <Input placeholder="Position" name="position" value={exp.position} onChange={(e) => handleExperienceChange(index, e)} />
//                   <Input placeholder="Duration" name="duration" value={exp.duration} onChange={(e) => handleExperienceChange(index, e)} />
//                   <Textarea placeholder="Description" name="description" value={exp.description} onChange={(e) => handleExperienceChange(index, e)} />
//                   <Button variant="destructive" size="sm" onClick={() => removeExperience(index)}><Trash2 className="w-4 h-4 mr-2" /> Remove</Button>
//                 </div>
//               ))}
//               <Button onClick={addExperience}><Plus className="w-4 h-4 mr-2" /> Add Experience</Button>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader>
//               <CardTitle>Skills</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               {skills.map((skill, index) => (
//                 <div key={index} className="flex items-center space-x-2">
//                   <Input placeholder="Skill" value={skill} onChange={(e) => handleSkillChange(index, e)} />
//                   <Button variant="destructive" size="sm" onClick={() => removeSkill(index)}><Trash2 className="w-4 h-4" /></Button>
//                 </div>
//               ))}
//               <Button onClick={addSkill}><Plus className="w-4 h-4 mr-2" /> Add Skill</Button>
//             </CardContent>
//           </Card>
//         </div>

//         <Card className="h-fit sticky top-4">
//           <CardHeader>
//             <CardTitle>CV Preview</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-6">
//               <div>
//                 <h2 className="text-2xl font-bold">{personalInfo.name}</h2>
//                 <p>{personalInfo.email} | {personalInfo.phone}</p>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold">Professional Summary</h3>
//                 <p>{personalInfo.summary}</p>
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold">Education</h3>
//                 {education.map((edu, index) => (
//                   <div key={index}>
//                     <p><strong>{edu.school}</strong> - {edu.degree}, {edu.year}</p>
//                   </div>
//                 ))}
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold">Work Experience</h3>
//                 {experience.map((exp, index) => (
//                   <div key={index} className="mb-2">
//                     <p><strong>{exp.company}</strong> - {exp.position}</p>
//                     <p>{exp.duration}</p>
//                     <p>{exp.description}</p>
//                   </div>
//                 ))}
//               </div>
//               <div>
//                 <h3 className="text-xl font-semibold">Skills</h3>
//                 <p>{skills.join(', ')}</p>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }
'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import jsPDF from 'jspdf'

export default function CVBuilder() {
  const [cvData, setCvData] = useState({
    name: '',
    email: '',
    phone: '',
    summary: '',
    experience: '',
    education: '',
    skills: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setCvData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const generatePDF = () => {
    const doc = new jsPDF()
    
    // Set font size and type
    doc.setFontSize(20)
    doc.setFont("helvetica", "bold")
    
    // Add content to PDF
    doc.text(cvData.name, 20, 20)
    
    doc.setFontSize(12)
    doc.setFont("helvetica", "normal")
    doc.text(`Email: ${cvData.email}`, 20, 30)
    doc.text(`Phone: ${cvData.phone}`, 20, 40)
    
    doc.setFont("helvetica", "bold")
    doc.text("Summary", 20, 55)
    doc.setFont("helvetica", "normal")
    doc.text(cvData.summary, 20, 65, { maxWidth: 170 })
    
    doc.setFont("helvetica", "bold")
    doc.text("Experience", 20, 100)
    doc.setFont("helvetica", "normal")
    doc.text(cvData.experience, 20, 110, { maxWidth: 170 })
    
    doc.setFont("helvetica", "bold")
    doc.text("Education", 20, 160)
    doc.setFont("helvetica", "normal")
    doc.text(cvData.education, 20, 170, { maxWidth: 170 })
    
    doc.setFont("helvetica", "bold")
    doc.text("Skills", 20, 210)
    doc.setFont("helvetica", "normal")
    doc.text(cvData.skills, 20, 220, { maxWidth: 170 })
    
    // Save the PDF
    doc.save("cv.pdf")
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>CV Builder</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" value={cvData.name} onChange={handleInputChange} />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" value={cvData.email} onChange={handleInputChange} />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" type="tel" value={cvData.phone} onChange={handleInputChange} />
          </div>
          <div>
            <Label htmlFor="summary">Professional Summary</Label>
            <Textarea id="summary" name="summary" value={cvData.summary} onChange={handleInputChange} />
          </div>
          
          <div>
            <Label htmlFor="education">Education</Label>
            <Textarea id="education" name="education" value={cvData.education} onChange={handleInputChange} />
          </div>
          <div>
            <Label htmlFor="skills">Skills</Label>
            <Textarea id="skills" name="skills" value={cvData.skills} onChange={handleInputChange} />
          </div>
          <div>
            <Label htmlFor="experience">Work Experience</Label>
            <Textarea id="experience" name="experience" value={cvData.experience} onChange={handleInputChange} />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button onClick={generatePDF}>Generate and Download CV</Button>
      </CardFooter>
    </Card>
  )
}