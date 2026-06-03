import { publications } from '../constants/index.js';

const Research = () => {
    return (
        <section className="c-space my-24" id="research">
            <p className="section-label">Research &amp; Publications</p>

            <div className="flex flex-col gap-0">
                {publications.map((pub, i) => (
                    <div
                        key={i}
                        className="pub-hover border border-white/6 rounded-lg p-7 mb-4 bg-white/[0.015]"
                    >
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                            <div className="flex items-center gap-3">
                                <span className="text-xs font-medium tracking-widest uppercase text-white/25 border border-white/10 px-2 py-1 rounded-sm">
                                    {pub.type}
                                </span>
                                <span className="text-xs text-white/30">{pub.venue}</span>
                            </div>
                            {pub.link && (
                                <a href={pub.link} target="_blank" rel="noopener" className="link-arrow">
                                    {pub.linkLabel}
                                </a>
                            )}
                        </div>

                        <h3 className="serif text-white/80 text-xl font-normal mb-2 leading-snug">
                            {pub.title}
                        </h3>
                        <p className="text-white/30 text-sm mb-4" style={{fontWeight: 300}}>{pub.authors}</p>

                        <p className="text-white/45 text-sm leading-relaxed" style={{fontWeight: 300}}>
                            {pub.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Research;
