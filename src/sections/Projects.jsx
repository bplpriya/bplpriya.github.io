import { useState } from 'react';
import { projects } from '../constants/index.js';

const Projects = () => {
    const [expanded, setExpanded] = useState(null);

    return (
        <section className="c-space my-24" id="projects">
            <p className="section-label">Selected Projects</p>

            <div>
                {projects.map((proj, i) => (
                    <div
                        key={i}
                        className={`proj-row${i === projects.length - 1 ? ' proj-row-last' : ''}`}
                        onClick={() => setExpanded(expanded === i ? null : i)}
                    >
                        <div style={{display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:'1rem'}}>
                            <div style={{flex: 1}}>
                                <div style={{display:'flex', alignItems:'center', gap:'0.75rem', marginBottom:'0.5rem'}}>
                                    <span style={{fontSize:'0.7rem', color:'rgba(255,255,255,0.18)', fontWeight:500, fontVariantNumeric:'tabular-nums'}}>
                                        0{i + 1}
                                    </span>
                                    <h3 className="serif" style={{color:'rgba(255,255,255,0.8)', fontSize:'1.2rem', fontWeight:400, lineHeight:1.3}}>
                                        {proj.title}
                                    </h3>
                                </div>
                                <div style={{display:'flex', flexWrap:'wrap', gap:'0.4rem', marginLeft:'1.75rem'}}>
                                    {proj.tags.map((tag, j) => (
                                        <span key={j} className="tag-pill">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <span style={{color:'rgba(255,255,255,0.22)', fontSize:'1.25rem', marginTop:'0.1rem', flexShrink:0, userSelect:'none'}}>
                                {expanded === i ? '−' : '+'}
                            </span>
                        </div>

                        {expanded === i && (
                            <div style={{marginTop:'1.5rem', marginLeft:'1.75rem', display:'flex', flexDirection:'column', gap:'0.875rem'}}>
                                <p style={{color:'rgba(255,255,255,0.48)', fontSize:'0.9rem', lineHeight:1.75, fontWeight:300}}>
                                    {proj.desc}
                                </p>
                                <p style={{color:'rgba(255,255,255,0.32)', fontSize:'0.875rem', lineHeight:1.7, fontWeight:300}}>
                                    {proj.subdesc}
                                </p>
                                <div style={{display:'flex', gap:'1.5rem', marginTop:'0.5rem'}}>
                                    <a href={proj.github} target="_blank" rel="noopener" className="link-arrow">
                                        GitHub ↗
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
