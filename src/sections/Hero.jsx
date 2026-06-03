const Hero = () => {
    return (
        <section className="min-h-screen w-full flex flex-col justify-center relative" id="home">
            <div className="absolute inset-0 opacity-[0.03]"
                style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px'}}>
            </div>

            <div className="c-space relative z-10 pt-24 flex flex-col items-start">
                {/* <p className="text-white/30 text-xs tracking-widest uppercase mb-3 font-medium">
                    MS Computer Science · Georgia State University
                </p> */}

                <h2 className="serif mb-2" style={{fontSize:'clamp(1.1rem, 2.5vw, 1.5rem)', color:'rgba(255,255,255,0.55)', fontWeight:400, fontStyle:'italic'}}>
                    Bala Pavani Koppuravuri
                </h2>

                <h1 className="serif text-white/90 font-normal leading-tight mb-6"
                    style={{fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', letterSpacing: '-0.01em'}}>
                    From microcontrollers to brainwaves.
                </h1>

                <p className="text-white/40 text-base max-w-xl leading-relaxed mb-10" style={{fontWeight: 300}}>
    Passionate about AI/ML, IoT, TinyML, and Edge Computing - building systems that reason
    under real-world hardware constraints. My work spans EEG signal processing, energy-efficient object detection and biomedical imaging. Published in <span className="text-white/60">Scientific Reports</span> and <span className="text-white/60">IEEE CINE</span>.
    Graduate Research Assistant at <span className="text-white/60">MORSE Lab, GSU</span>.
</p>

                <div className="flex flex-wrap gap-6">
                    <a href="mailto:bplpriya99@gmail.com" className="link-arrow">Email</a>
                    <a href="https://www.linkedin.com/in/bala-pavani-koppuravuri-23474624a/" target="_blank" rel="noopener" className="link-arrow">LinkedIn ↗</a>
                    <a href="https://github.com/bplpriya" target="_blank" rel="noopener" className="link-arrow">GitHub ↗</a>
                </div>
            </div>

            <div className="absolute bottom-10 left-0 right-0 c-space z-10">
                <a href="#about" className="link-arrow">Scroll down</a>
            </div>
        </section>
    );
};

export default Hero;