export const navLinks = [
    { id: 1, name: 'Home',         href: '#home' },
    { id: 2, name: 'About',        href: '#about' },
    { id: 3, name: 'Research',     href: '#research' },
    { id: 4, name: 'Projects',     href: '#projects' },
];

export const publications = [
    {
        type: 'Journal',
        venue: 'Scientific Reports (Nature), 2025',
        title: 'Deploying TinyML for Energy-Efficient Object Detection and Communication in Low-Power Edge AI Systems',
        authors: 'Ch Madhu Bhushan, Priya Koppuravuri, Nomitha Prasanthi et al.',
        desc: 'Most AI lives in the cloud - powerful, but power-hungry. This work asks a different question: what if a microcontroller the size of a thumbnail could detect objects in real time, make decisions on-device, and transmit only what matters? We deployed quantized MobileNetV2 on low-power MCUs, achieving 3–4× storage reduction through 8-bit post-training quantization. The system fits inside a 1 MB flash budget, runs inference in under 15 ms per frame, and consumes 10–22 J per inference. We also studied TCP vs. UDP trade-offs for wireless reporting - a practical detail that turns out to matter enormously in real deployments. The result is a blueprint for autonomous, scalable Edge AI where the intelligence lives at the sensor.',
        link: 'https://www.nature.com/articles/s41598-025-27818-9',
        linkLabel: 'Read Journal ↗',
    },
    {
        type: 'Conference',
        venue: 'IEEE CINE, 2026',
        title: 'Multi-Controller TinyML Architecture for Object Detection with Efficient Communication and Applications',
        authors: 'Ch Madhu Bhushan, Priya Koppuravuri, Nomitha Prasanthi B, Firoz Gazi, Md. Muzakkir Hussain',
        desc: 'A single microcontroller can struggle under the combined load of vision inference, sensor fusion, and wireless communication. This paper proposes a distributed multi-controller architecture where these responsibilities are split intelligently across coordinated MCUs. Each controller handles what it does best - one runs the TinyML inference pipeline, another manages communication, enabling the overall system to remain responsive without overloading any single device. The architecture targets real-world IoT deployments where latency, reliability, and resource limits all pull in different directions.',
        link: 'https://ieeexplore.ieee.org/abstract/document/11503014/',
        linkLabel: 'IEEE Conference ↗',
    },
    {
        type: 'Book Chapter',
        venue: 'Cambridge Scholars Publishing, 2025',
        title: 'Development of a Deep Learning Model for OCT Image Classification for Central Serous Chorioretinopathy',
        authors: 'Farha Fatma, Priya Koppuravuri, Pratyusha Ghanne, Firoz Gazi, Md. Muzakkir Hussain',
        desc: 'Central Serous Chorioretinopathy (CSC) is a retinal condition where fluid accumulates beneath the retina, causing vision distortion that is easy to miss or misclassify on optical coherence tomography (OCT) scans. Manual diagnosis is slow and specialist-dependent. We trained a deep learning model on OCT image slices to automatically distinguish CSC from other retinal conditions, contributing to the broader goal of AI-assisted ophthalmology in resource-constrained settings.',
        link: 'https://books.google.com/books?hl=en&lr=&id=b6CHEQAAQBAJ&oi=fnd&pg=PA352&dq=related:Srl7C4aFjrYJ:scholar.google.com/&ots=o3DQ_so5hg&sig=_fkA8xAVmbRgnCIFnFIImGez9KI#v=onepage&q&f=false',
        linkLabel: 'Book Chapter ↗',
    },

    {
        type: 'Patent',
        venue: 'Intellectual Property India, 2025',
        title: 'Multi-Controller TinyML Architecture for Object Detection with Efficient Communication and Applications',
        authors: 'Koppuravuri Bala Pavani Lakshmi Priya, Chakka Madhu Bhushan et al.',
        desc: 'Patent Application No. 202541087210. Covers the distributed MCU architecture for on-device object detection - splitting inference, sensor fusion, and wireless communication across coordinated microcontrollers to overcome single-device resource limits in IoT deployments.',
        link: null,
        linkLabel: null,
    },
    {
        type: 'Patent',
        venue: 'Intellectual Property India, 2025',
        title: 'System and Method for Air Quality Monitoring and Alert Generation using Artificial Intelligence',
        authors: 'Chakka Madhu Bhushan, Koppuravuri Bala Pavani Lakshmi Priya et al.',
        desc: 'Patent Application No. 202541000511. An AI-driven air quality monitoring system that processes sensor data on-device and generates real-time alerts - combining embedded systems with environmental intelligence.',
        link: null,
        linkLabel: null,
    },
    {
        type: 'Patent',
        venue: 'Intellectual Property India, 2024',
        title: 'ATTENDEDGE: An Edge-AI-based Smart Attendance System using 3D Object Detection',
        authors: 'Fazal Shaik, Chakka Madhu Bhushan, Koppuravuri Bala Pavani Lakshmi Priya et al.',
        desc: 'Patent Application No. 202441077282. A smart attendance system using 3D object detection at the edge - eliminating server dependency for real-time recognition in resource-constrained environments.',
        link: null,
        linkLabel: null,
    },
];

export const projects = [
    
{
    title: 'AgriCast - Seed Demand Forecasting & MLOps Pipeline',
    desc: 'Agricultural seed demand is highly seasonal and difficult to forecast accurately, often leading to overstocking or stock shortages. AgriCast is an end-to-end machine learning platform that predicts weekly seed demand using XGBoost models trained on historical sales data, temporal features, and crop-season patterns. The system provides reliable forecasts while streamlining deployment through a production-ready MLOps pipeline with experiment tracking, containerization, and REST APIs.',
    subdesc: 'Built individual forecasting models for 12 SKUs across 6 districts using three years of weekly sales data, achieving up to 0.94 R² and a 31% reduction in MAE over a seasonal baseline. Implemented MLflow experiment tracking (40+ runs), Dockerized PostgreSQL, FastAPI, MLflow, and Streamlit services, and developed an interactive dashboard for demand forecasting, regional analysis, and model performance visualization.',
    tags: ['Python', 'XGBoost', 'FastAPI', 'MLflow', 'Docker', 'PostgreSQL', 'Streamlit', 'Scikit-learn'],
    github: 'https://github.com/bplpriya/AgriCast.git',
},


    {
        title: 'Brain Tumor Segmentation - GVF Snakes',
        desc: 'Traditional snake algorithms for medical image segmentation look elegant on paper but break down at concavities - they miss the shapes that matter most in tumors. The root cause: external forces derived from image gradients only exist near edges, so a contour initialized far from a boundary simply never finds it. I went back to the 1998 Xu & Prince paper and reimplemented Gradient Vector Flow from scratch, solving the pentadiagonal matrix system at each iteration. GVF diffuses edge information across the image via a PDE, giving the contour a "pull" even from far away.',
        subdesc: 'Evaluated on the LGG MRI dataset (3,929 slices, 110 patients) with patient-level train/test split to ensure clinical honesty. GVF achieved a Dice score of 0.91 vs. 0.74 for traditional snakes from the same initialization - a +22.7% improvement. Also built an interactive GUI for real-time contour visualization, enabling slice-by-slice tumor inspection with adjustable α (elasticity) and μ (GVF diffusion strength) parameters.',
        tags: ['Python', 'NumPy', 'SciPy', 'scikit-image', 'Active Contour', 'Medical Imaging'],
        github: 'https://github.com/bplpriya/Brain-Tumor-Segmentation-using-GVF-Snakes.git',
    },
    {
        title: 'Lung Cancer Detection using CNN',
        desc: "Pathologists diagnosing lung cancer from histopathology images face thousands of slides per day, high cognitive load, and the pressure of a life-or-death call. Misclassification between Adenocarcinoma, Benign, and Squamous Cell Carcinoma is common and costly. I trained a ResNet50-based classifier on 9,375 balanced images across the three classes, using transfer learning from ImageNet weights and fine-tuning the final layers on the lung histopathology domain.",
        subdesc: 'Achieved 99.83% training accuracy and 97.83% validation accuracy on the balanced Kaggle dataset (6,750 train / 750 val / 1,875 test, 2,250 per class). Built a Tkinter GUI designed for clinical usability - pathologists can load a slide and get an immediate prediction with confidence scores. The balanced dataset design ensures the model is not biased toward any single cancer subtype.',
        tags: ['Python', 'PyTorch', 'ResNet50', 'Transfer Learning', 'Tkinter', 'Medical CV'],
        github: 'https://github.com/bplpriya/Lung-Cancer-Detection-using-CNN.git',
    },
    {
        title: 'Chatbot for Mental Health Support',
        desc: 'Mental health support is chronically under-resourced - long wait times, high cost, and the social barrier of asking for help. This full-stack web application lowers that barrier with an AI chatbot that provides immediate, accessible, and judgment-free interaction. Built on the MERN stack (MongoDB, Express.js, React.js, Node.js), the platform integrates an AI chatbot via API for responsive conversations, user authentication, and a session booking system so users can escalate to professional support when needed.',
        subdesc: 'Key features include user registration and login, chatbot interaction with session memory, therapist session booking with calendar integration, and access to historical session logs. The architecture emphasizes modularity and data privacy - user conversations are stored securely with access controls, and the system is designed to scale independently across frontend, backend, and database layers.',
        tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'MERN Stack', 'REST API'],
        github: 'https://github.com/bplpriya/Chatbot-for-mental-health-support.git',
    },
    {
        title: 'Property Pulse - Real Estate Mobile App',
        desc: 'Real estate apps often bury the most important interactions - finding what is near you, contacting a seller, knowing the moment someone engages with your listing. Property Pulse rethinks the UX from the ground up: geolocation-based search powered by the geolocator API so users see listings by distance first, Firebase-backed listings with Cloudinary image management, and FCM push notifications so sellers get instant alerts when a buyer likes or interacts with their property.',
        subdesc: 'Built in Flutter/Dart with Firebase Authentication, Cloud Firestore for real-time data, and a custom token economy for transactions (mark Bought/Sold to auto-adjust user balances). Additional features: wishlist, reviews and star ratings, and a flagging system that auto-hides listings after 10 flags. Each FCM device token is registered and stored in Firestore for targeted, reliable push delivery.',
        tags: ['Flutter', 'Dart', 'Firebase', 'Firestore', 'Cloudinary', 'FCM'],
        github: 'https://github.com/bplpriya/MAD_Project2_Property_Pulse.git',
    },
    {
        title: 'Predictive Framework for Credit Card Default Risk',
        desc: "In 2006, Taiwan's credit card issuers collapsed under a debt crisis caused by over-issuing cards to ineligible applicants. The dataset that came out of that crisis - 30,000 cardholders, 25 attributes, from UC Irvine's ML Repository - became a benchmark for credit risk modeling. I built a comparative framework testing seven ML models (SGD, Decision Tree, Logistic Regression, KNN, Random Forest, SVM, XGBoost) across five train/test split ratios (90/10, 80/20, 70/30, 60/40, 50/50) to understand both model performance and how split ratio affects generalization.",
        subdesc: 'Best results: SGD achieved 83.3% accuracy at 80/20 and 60/40 splits; SVC reached 83.66% at 70/30. ROC curve analysis showed XGBoost had the strongest AUC across splits. A key demographic insight emerged: female, more educated, single customers aged 30–40 were the most reliable payers. All models evaluated on accuracy, precision, recall, F1, and ROC-AUC.',
        tags: ['Python', 'Scikit-learn', 'XGBoost', 'SVM', 'Pandas', 'ROC-AUC', 'EDA'],
        github: 'https://github.com/bplpriya/Predictive-Framework-for-Credit-card-default-risk',
    },
    {
        title: 'Comparative Analysis of LEACH and EDEEC Protocols - WSN',
        desc: 'Wireless sensor networks live and die by their energy budget - a node that drains first can partition the entire network. LEACH, the classic protocol, uses hierarchical clustering and probabilistic cluster-head rotation to balance energy across homogeneous nodes. EDEEC extends this for heterogeneous networks by factoring in residual energy, distance to cluster head, and node centrality during cluster formation - a more complex but more adaptive approach.',
        subdesc: 'I implemented and compared both protocols across four dimensions: energy efficiency, scalability, implementation complexity, and adaptability to dynamic topologies. EDEEC outperformed LEACH in heterogeneous and high-churn scenarios; LEACH remained competitive in stable, homogeneous deployments. The study concluded by proposing a modification to LEACH\'s cluster-head selection threshold to improve performance in mixed-energy networks - effectively borrowing EDEEC\'s residual-energy weighting into LEACH\'s simpler framework.',
        tags: ['Python', 'Network Simulation', 'WSN', 'IoT', 'Clustering Algorithms', 'Energy Efficiency'],
        github: 'https://github.com/bplpriya/Comparative-analysis-for-LEACH-and-EDEEC-protocols.git',
    },
];
