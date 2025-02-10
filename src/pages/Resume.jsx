import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  GraduationCap, 
  Wrench, 
  Code,
  ExternalLink
} from 'lucide-react';

const Resume = () => {
  // Data definitions remain the same as in your original code
  const education = {
    school: 'Rutgers University',
    degree: 'B.S. in Electrical Engineering',
    graduationDate: 'May 2020'
  };

  const technicalSkills = {
    hardware: 'STM, Silabs, Texas Instruments, Microchip, SPI, I2C, UART, ADC, USB, PWM, Wi-fi, Zigbee, MATTER, GPS, Bluetooth',
    languages: 'C/C++, Python, ARM Assembly, Bash/shell, PowerShell',
    software: 'Visual Studio, PyCharm, Atmel Studio, DAVE, MPLAB X, Simplicity Studio, Matlab (SIMULINK), EAGLECAD, Altium',
    systems: 'Windows, Linux, macOS'
  };

  const experience = [
    {
      company: 'Banc3 inc.',
      title: 'Embedded Electronics Engineer (Contract)',
      period: 'November 2024 -- Current',
      highlights: [
        'Contributed to the schematic design of a 16 x 12 non-blocking switch architecture based on the MAX 10 FPGA, specifically developing FPGA peripheral circuitry and implementing power stage components with appropriate power supply ICs',
        'Utilized Intel Quartus FPGA development software for integrating and verifying FPGA peripheral designs, ensuring proper interface with system components',
        'Executed comprehensive PCB layout for the switching system, ensuring optimal signal integrity and thermal management while meeting aerospace design requirements',
        'Conducted thorough system analysis including layer stack-up optimization, power consumption calculations, and weight estimations to ensure compliance with platform specifications',
        'Performed debug and verification of radar PCB systems, including FPGA firmware deployment and validation of SPI/I2C communication interfaces',
        'Validated system performance through rigorous testing of power distribution networks and clock distribution systems against specifications'
      ]
    },
    {
      company: 'Foam inc.',
      title: 'Electrical Engineer (Contract)',
      period: 'June 2024 -- November 2024',
      highlights: [
        'Assembled radio gateways incorporating FPGA which ran Peta Linux and interfaced between various modules including LoRa transceivers, GPS modules and LTE modules',
        'Analyzed Schematics to understand circuit designs and conduct through electrical tests post-assembly',
        'Developed a comprehensive unit testing framework using Python, Bash and shell scripting',
        'Automated the entire firmware testing process for radio gateways, significantly reducing the time and resources required for software testing',
        'Developed proficiency in working with various communication technologies such as LoRa, GPS and LTE within IoT device ecosystem',
        'Assembled and tested end node devices (Cycloids) featuring STM32 microcontrollers and LoRa transceivers'
      ]
    },
    {
      company: 'Silicon Labs',
      title: 'Embedded Software Engineer II (WATT team)',
      period: 'June 2022 -- December 2023',
      highlights: [
        'Developed Bare-bones Application layer code in C++ for the Matter project, facilitating end user development',
        'Integrated the Matter project into Silicon Labs Simplicity Studio IDE and GSDK through development of Tooling and automation scripts in Python, Bash, Shell and PowerShell',
        'Conducted root cause analysis to debug various issues reported by end users using Ozone debugger and other tools',
        'Revamped and maintained the CI/CD pipeline architecture through overhauling of the Jenkins file, reducing job execution time by 50%',
        'Took responsibility for the deployment of the Silabs Matter extension used with the Simplicity Studio IDE'
      ]
    },
    {
      company: 'Dialight',
      title: 'Firmware Engineer',
      period: 'June 2021 - May 2022',
      highlights: [
        'Designed firmware in C for lighting control using Infineon XMC1402 32-bit processor to apply different lighting modes based on ambient light and Human detection',
        'Developed bare metal I2C drivers to Interface with ambient light sensor and UART driver for Microwave sensor and implemented data acquisition routines',
        'Implemented a Battery Backup Management System that monitored LED fixture state through multiple data points',
        'Created battery charging/discharging routines for various chemistries (NiMH, LiFePO4) using Feedback control loops considering voltage, current and temperature',
        'Maintained communication with DALI master board over I2C to ensure continuous safe operation according to DALI standard'
      ]
    },
    {
      company: 'TDK Lambda',
      title: 'Electrical Engineering Associate',
      period: 'July 2020 -- June 2021',
      highlights: [
        'Staged Electrical testing of analog circuits to conduct qualification and design verification',
        'Set up and conducted testing of high switch mode power supplies under various conditions to investigate design propositions',
        'Developed a Software application in Python that facilitated the communication (RS232/485, LAN, GBIP) of various equipment (Power supplies, electronic loads, DMMs)',
        'Developed, Debugged, and maintained embedded firmware in C responsible for communication and data flow on Power supplies'
      ]
    }
  ];

  const projects = [
    {
      title: 'Self-Balancing Robot',
      url: 'https://github.com/HusseinElsherbini/Self_Balancing_Robot',
      description: [
        'Designed and tuned PID controller using SIMULINK and MATLAB',
        'Implemented sensor fusion of gyroscope and accelerometer',
        'Developed I2C communication with interrupt service routine',
        'Built using STM32F4 microcontroller programmed in C'
      ]
    },
    {
      title: '8-Bit Computer',
      url: 'https://github.com/HusseinElsherbini/8-bit-computer',
      description: [
        'Designed and built computer using TTL logic and 7400 series ICs',
        'Implemented 16 Byte RAM and multiple registers',
        'Created custom control module with microcode in Assembly',
        'Built astable and monostable clock systems'
      ]
    }
  ];

  // Reusable section component for consistent styling
  const Section = ({ icon: Icon, title, children, className = "" }) => (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`mb-8 ${className}`}
    >
      <div className="flex items-center gap-2 mb-4">
        <Icon className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
      </div>
      {children}
    </motion.section>
  );

  // Experience card component for consistent job entry styling
  const ExperienceCard = ({ job, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="mb-6 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all border border-gray-100"
    >
      <div className="mb-4">
        <h3 className="font-semibold text-xl text-gray-900">{job.title}</h3>
        <p className="text-blue-600 text-lg">{job.company}</p>
        <p className="text-sm text-gray-600 mt-1">{job.period}</p>
      </div>
      
      <ul className="space-y-3">
        {job.highlights.map((highlight, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start"
          >
            <span className="text-blue-600 mr-2 mt-1">•</span>
            <span className="text-gray-700">{highlight}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );

  // Grid component for displaying technical skills
  const SkillsGrid = ({ skills }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {Object.entries(skills).map(([category, skillList], index) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
        >
          <h3 className="font-semibold text-gray-900 capitalize mb-2">{category}</h3>
          <p className="text-gray-700 text-sm">{skillList}</p>
        </motion.div>
      ))}
    </div>
  );

  // Project card component for displaying projects
  const ProjectCard = ({ project, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-lg text-gray-900">{project.title}</h3>
        <a 
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700 transition-colors"
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
      <ul className="space-y-2">
        {project.description.map((detail, i) => (
          <li key={i} className="flex items-start text-sm">
            <span className="text-blue-600 mr-2">•</span>
            <span className="text-gray-700">{detail}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );

  // Main render return for the Resume component
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Hussein Elsherbini</h1>
        <div className="text-gray-600">
          <p>helsherbini.co@gmail.com | (347) - 612 - 9529</p>
        </div>
      </motion.div>

      {/* Education Section */}
      <Section icon={GraduationCap} title="Education">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <h3 className="font-semibold text-lg text-gray-900">{education.school}</h3>
          <p className="text-gray-700">{education.degree}</p>
          <p className="text-gray-600 text-sm">{education.graduationDate}</p>
        </div>
      </Section>

      {/* Technical Skills Section */}
      <Section icon={Wrench} title="Technical Expertise">
        <SkillsGrid skills={technicalSkills} />
      </Section>

      {/* Work Experience Section */}
      <Section icon={Briefcase} title="Work Experience">
        {experience.map((job, index) => (
          <ExperienceCard key={index} job={job} index={index} />
        ))}
      </Section>

      {/* Projects Section */}
      <Section icon={Code} title="Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Resume;