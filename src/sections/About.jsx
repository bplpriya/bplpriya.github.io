const About = () => {
    return (
        <section className="c-space my-24" id="about">
            <p className="section-label">About Me</p>

            <div className="grid lg:grid-cols-5 grid-cols-1 gap-12">
                <div className="lg:col-span-3 flex flex-col gap-6 text-white/50 text-base leading-relaxed" style={{fontWeight: 300}}>
                    <p>
    I was always drawn to how the human body works - the brain, the senses, the signals the body 
    sends that we can barely interpret. That curiosity found a technical outlet during a summer 
    research internship at SRM University, where I worked on <span className="text-white/75">EEG-based Person Authentication using Machine Learning</span> - 
    my first real taste of research, and the moment I realized that biology and AI could speak 
    the same language.
</p>
<p>
    One project led to another - OCT retinal image datasets for eye disease classification turned into a published book chapter. Then at SRM's FUN Lab, the focus shifted to embedded systems: energy-efficient object detection and air quality monitoring on devices you could hold in your hand. I had never touched an Arduino Nano 33 BLE or ESP32-CAM before. I learned from scratch, and came out the other side with two publications and three patents.
</p>
<p>
    The gap between "it works in the cloud" and "it works here, now, on edge device" turned 
    out to be the most interesting engineering problem I had encountered. That gap is what 
    I still work on today.
</p>
<p>
    At Georgia State, I spent two semesters as a Graduate Teaching Assistant - 
running lab sessions, solving student doubts in real time, learning that 
explaining something clearly is harder than building it. That experience 
led to the MORSE Lab, where I now work as a Graduate Research Assistant 
studying attention span using EEG signals - asking whether we can detect 
when a person's focus drifts, and how brainwave patterns encode that shift. 
It brought me back to where I started: the human body, the signals we are 
only beginning to understand.
</p>
                </div>

                <div className="lg:col-span-2 flex flex-col gap-6">
                    <div className="border border-white/8 rounded-lg p-6 bg-white/2">
                        <p className="text-xs tracking-widest uppercase text-white/25 mb-4 font-medium">Education</p>
                        <div className="flex flex-col gap-4 text-sm text-white/50" style={{fontWeight: 300}}>
                            <div>
                                <p className="text-white/75">MS Computer Science</p>
                                <p>Georgia State University</p>
                                <p>2025 - Present · GPA 3.87</p>
                            </div>
                            <div>
                                <p className="text-white/75">B.Tech Computer Science & Engineering</p>
                                <p>SRM University AP</p>
                                <p>2021 - 2025 · GPA 9.04/10</p>
                            </div>
                        </div>
                    </div>

                    <div className="border border-white/8 rounded-lg p-6 bg-white/2">
                        <p className="text-xs tracking-widest uppercase text-white/25 mb-4 font-medium">Experience</p>
                        <div className="flex flex-col gap-4 text-sm text-white/50" style={{fontWeight: 300}}>
                            <div>
                                <p className="text-white/75">Graduate Research Assistant</p>
                                <p>MORSE Lab, GSU · Attention Span &amp; EEG</p>
                            </div>
                            <div>
                                <p className="text-white/75">Graduate Teaching Assistant</p>
                                <p>GSU · Data Structures · Principles of CS</p>
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