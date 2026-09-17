const About = () => {
    return (
        <section className="c-space my-24" id="about">
            <p className="section-label">About Me</p>

            <div className="grid lg:grid-cols-5 grid-cols-1 gap-12">
                <div className="lg:col-span-3 flex flex-col gap-6 text-white/50 text-base leading-relaxed" style={{fontWeight: 300}}>
                    <p>
    I was always drawn to how the human body works - the brain, the senses, the signals the body
    sends that we can barely interpret. That curiosity found a technical outlet during a summer
    research internship at SRM University, where I worked on
    <span className="text-white/75"> EEG-based Person Authentication using Machine Learning</span> -
    my first real taste of research, and the moment I realized that biology and AI could speak
    the same language.
</p>

<p>
    One project led to another - OCT retinal image datasets for eye disease classification
    contributed to a published journal and book chapter, while my work at SRM's FUN Lab focused on
    energy-efficient Edge AI, TinyML, and embedded systems. I worked with platforms such as
    the Arduino Nano 33 BLE, ESP32-CAM and Raspberry Pi, developing real-time object detection and intelligent
    sensing systems. This work led to publications (journal, conference) and three patents.
</p>

<p>
    The gap between "it works in the cloud" and "it works here, now, on edge device" turned 
    out to be the most interesting engineering problem I had encountered. That gap is what 
    I still work on today.
</p>

<p>
    At Georgia State University, I have worked as a
    <span className="text-white/75"> Graduate Teaching Assistant for three semesters</span>,
    supporting courses including Data Structures, Principles of Computer Science, and Computer
    Vision. Alongside teaching, I have worked as a Graduate Research Assistant in the MORSE Lab,
    where I contributed to EEG-based attention-span research, analyzing how mobile distractions
    influence behavioral performance and brainwave activity. I have also guided undergraduate
    REU researchers on their independent research projects, helping with technical implementation
    and research methodology.
</p>

<p>
    My current research has moved toward sensing beyond traditional vision and EEG. I am now
    working on my <span className="text-white/75">master's thesis on mmWave radar sensing</span>,
    building and validating an FMCW radar pipeline for range-Doppler data capture and visualization.
    I am interested in the intersection of AI, sensing, Edge AI, and intelligent systems -
    particularly where machine learning has to work close to the physical world.
</p>


                </div>

                <div className="lg:col-span-2 flex flex-col gap-6">
                    <div className="border border-white/8 rounded-lg p-6 bg-white/2">
                        <p className="text-xs tracking-widest uppercase text-white/25 mb-4 font-medium">Education</p>
                        <div className="flex flex-col gap-4 text-sm text-white/50" style={{fontWeight: 300}}>
                            <div>
                                <p className="text-white/75">MS Computer Science</p>
                                <p>Georgia State University</p>
                                <p>2025 - Present · GPA 3.87/4.0</p>
                            </div>
                            <div>
                                <p className="text-white/75">B.Tech Computer Science & Engineering</p>
                                <p>SRM University AP</p>
                                <p>2021 - 2025 · GPA 9.04/10.0</p>
                            </div>
                        </div>
                    </div>

                    <div className="border border-white/8 rounded-lg p-6 bg-white/2">
                        <p className="text-xs tracking-widest uppercase text-white/25 mb-4 font-medium">Experience</p>
                        <div className="flex flex-col gap-4 text-sm text-white/50" style={{fontWeight: 300}}>
                            <div>
                                <p className="text-white/75">Master's Thesis Research</p>
                                <p>MORSE Studio, GSU · mmWave Radar Sensing &amp; FMCW Range-Doppler Analysis</p>
                            </div>
                            <div>
                                <p className="text-white/75">Graduate Research Assistant</p>
                                <p>MORSE Studio, GSU · EEG Attention Research &amp; Undergraduate Mentoring</p>
                            </div>
                            <div>
                                <p className="text-white/75">Graduate Teaching Assistant</p>
                                <p>GSU · Computer Vision · Data Structures · Principles of CS</p>
                            </div>
                            <div>
                                <p className="text-white/75">Summer Research Intern</p>
                                <p>SRM-AP · EEG-based Person Authentication using Machine Learning</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;