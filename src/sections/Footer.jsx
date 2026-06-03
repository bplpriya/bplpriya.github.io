const Footer = () => {
    return (
        <footer className="c-space py-10 border-t border-white/6 flex justify-between items-center flex-wrap gap-4">
            <p className="text-xs tracking-widest uppercase" style={{color:'rgba(255,255,255,0.2)', fontWeight:500}}>
                Bala Pavani Koppuravuri
            </p>
            <a href="mailto:bplpriya99@gmail.com"
                style={{color:'rgba(255,255,255,0.25)', fontSize:'0.8rem', fontWeight:300, textDecoration:'none'}}>
                bplpriya99@gmail.com
            </a>
        </footer>
    );
};

export default Footer;