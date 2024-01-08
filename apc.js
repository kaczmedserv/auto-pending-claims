// Auto Pending Radio Claims
// @kacper.czapran@medserv.ie

const SYMPTOMS_START = [
    "Indication:",
    "Indication",
    "RADIOLOGY REPORT",
    "Clinical Information:",
    "Clinical Information",
    "Clinical indication:",
    "Clinical indication",
    "CLINICAL INDICATIONS:",
    "CLINICAL INDICATION:",
    "CLINICAL INDICATIONS",
    "CLINICAL INDICATION",
    "Clinical history:",
    "History:",
    "INDICATION:",
    "INDICATION"
];

const SYMPTOMS_END = [
    "Comparison:",
    "Technique:",
    "Technique",
    "Findings:",
    "Findings",
    "findings:",
    "Is LMP relevant",
    "Sequences",
    "COMPARISON:",
    "TECHNIQUE:",
    "Comparison radiology:"
];

const GENERIC_SYMPTOMS = [
    ["MRA CAROTID","Further investigation of the carotid arteries."],
    ["MRA BRAIN","Further investigation of intracranial aneurysm."],
    ["MRA HEAD","Further investigation of intracranial aneurysm."],
    ["BRAIN MRA","Further investigation of intracranial aneurysm."],
    ["MRI MRA","Further investigation of intracranial aneurysm."],
    ["BRAIN IAM","Headaches and tinnitus."],
    ["BRAIN MRI IAM","Headaches and tinnitus."],
    ["IAM BRAIN","Headaches and tinnitus."],
    ["IAMS BRAIN","Headaches and tinnitus."],
    ["BRAIN","Headaches."],
    ["IAM","Tinnitus."],
    ["PITUITARY","Elevated prolactin."],
    ["CERVICAL","Neck pain."],
    ["CSPINE","Neck pain."],
    ["THORACIC","Upper back pain."],
    ["LUMBOSACRAL","Lower back pain."],
    ["LUMBAR","Lower back pain."],
    ["WHOLE","Back pain."],
    ["TMJ","Temporomandibular joint pain."],
    ["TM JOINT","Temporomandibular joint pain."],
    ["SIJ","Sacroiliac joints pain."],
    ["SI JOINT","Sacroiliac joints pain."],
    ["FACIAL","Facial pain."],
    ["SACRUM","Sacral pain."],
    ["COCCYX","Coccygeal pain."],
    ["SACRUM COCCYX","Sacral and coccygeal pain."],
    ["HUMERUS BOTH","Bilateral arm pain."],
    ["HUMERUS RT LT","Bilateral arm pain."],
    ["HUMERUS LT RT","Bilateral arm pain."],
    ["HUMERUS RT","Right arm pain."],
    ["HUMERUS LT","Left arm pain."],
    ["HUMERUS RIGHT","Right arm pain."],
    ["HUMERUS LEFT","Left arm pain."],
    ["FEMUR BOTH","Bilateral thigh pain."],
    ["FEMUR RT LT","Bilateral thigh pain."],
    ["FEMUR LT RT","Bilateral thigh pain."],
    ["FEMUR RT","Right thigh pain."],
    ["FEMUR LT","Left thigh pain."],
    ["FEMUR RIGHT","Right thigh pain."],
    ["FEMUR LEFT","Left thigh pain."],
    ["TIBIA AND FIBULA BOTH","Bilateral calf pain."],
    ["TIBIA AND FIBULA RT LT","Bilateral calf pain."],
    ["TIBIA AND FIBULA LT RT","Bilateral calf pain."],
    ["TIBIA AND FIBULA RT","Right calf pain."],
    ["TIBIA AND FIBULA LT","Left calf pain."],
    ["TIBIA AND FIBULA RIGHT","Right calf pain."],
    ["TIBIA AND FIBULA LEFT","Left calf pain."],
    ["TIB FIB BOTH","Bilateral calf pain."],
    ["TIB FIB RT LT","Bilateral calf pain."],
    ["TIB FIB LT RT","Bilateral calf pain."],
    ["TIB FIB RT","Right calf pain."],
    ["TIB FIB LT","Left calf pain."],
    ["TIB FIB RIGHT","Right calf pain."],
    ["TIB FIB LEFT","Left calf pain."],
    ["PELVIS HIPS","Hips pain."],
    ["PELVIS","Pelvic pain."],
    ["GROIN","Groin pain."],
    ["HIPS RIGHT","Right hip pain."],
    ["HIPS LEFT","Left hip pain."],
    ["HIPS","Hips pain."],
    ["HIP BOTH","Hips pain."],
    ["HIP RT LT","Hips pain."],
    ["HIP LT RT","Hips pain."],
    ["HIP RT","Right hip pain."],
    ["HIP LT","Left hip pain."],
    ["HIP RIGHT","Right hip pain."],
    ["HIP LEFT","Left hip pain."],
    ["KNEE BOTH","Bilateral knee pain."],
    ["KNEE RT LT","Bilateral knee pain."],
    ["KNEE LT RT","Bilateral knee pain."],
    ["KNEE RT","Right knee pain."],
    ["KNEE LT","Left knee pain."],
    ["KNEE RIGHT","Right knee pain."],
    ["KNEE LEFT","Left knee pain."],
    ["ANKLE BOTH","Bilateral ankle pain."],
    ["ANKLE RT LT","Bilateral ankle pain."],
    ["ANKLE LT RT","Bilateral ankle pain."],
    ["ANKLE RT","Right ankle pain."],
    ["ANKLE LT","Left ankle pain."],
    ["ANKLE RIGHT","Right ankle pain."],
    ["ANKLE LEFT","Left ankle pain."],
    ["ACHILLES BOTH","Bilateral ankle pain."],
    ["ACHILLES RT LT","Bilateral ankle pain."],
    ["ACHILLES LT RT","Bilateral ankle pain."],
    ["ACHILLES RT","Right ankle pain."],
    ["ACHILLES LT","Left ankle pain."],
    ["ACHILLES RIGHT","Right ankle pain."],
    ["ACHILLES LEFT","Left ankle pain."],
    ["FOOT BOTH","Bilateral foot pain."],
    ["FOOT RT LT","Bilateral foot pain."],
    ["FOOT LT RT","Bilateral foot pain."],
    ["FOOT RT","Right foot pain."],
    ["FOOT LT","Left foot pain."],
    ["FOOT RIGHT","Right foot pain."],
    ["FOOT LEFT","Left foot pain."],
    ["SHOULDER BOTH","Bilateral shoulder pain."],
    ["SHOULDER RT LT","Bilateral shoulder pain."],
    ["SHOULDER LT RT","Bilateral shoulder pain."],
    ["SHOULDER RT","Right shoulder pain."],
    ["SHOULDER LT","Left shoulder pain."],
    ["SHOULDER RIGHT","Right shoulder pain."],
    ["SHOULDER LEFT","Left shoulder pain."],
    ["CLAVICLE RT","Right shoulder pain."],
    ["CLAVICLE LT","Left shoulder pain."],
    ["CLAVICLE RIGHT","Right shoulder pain."],
    ["CLAVICLE LEFT","Left shoulder pain."],
    ["CLAVICLE","Shoulder pain."],
    ["ELBOW BOTH","Bilateral elbow pain."],
    ["ELBOW RT LT","Bilateral elbow pain."],
    ["ELBOW LT RT","Bilateral elbow pain."],
    ["ELBOW RT","Right elbow pain."],
    ["ELBOW LT","Left elbow pain."],
    ["ELBOW RIGHT","Right elbow pain."],
    ["ELBOW LEFT","Left elbow pain."],
    ["WRIST BOTH","Bilateral wrist pain."],
    ["WRIST RT LT","Bilateral wrist pain."],
    ["WRIST LT RT","Bilateral wrist pain."],
    ["WRIST RT","Right wrist pain."],
    ["WRIST LT","Left wrist pain."],
    ["WRIST RIGHT","Right wrist pain."],
    ["WRIST LEFT","Left wrist pain."],
    ["HAND BOTH","Bilateral hand pain."],
    ["HAND RT LT","Bilateral hand pain."],
    ["HAND LT RT","Bilateral hand pain."],
    ["HAND RT","Right hand pain."],
    ["HAND LT","Left hand pain."],
    ["HAND RIGHT","Right hand pain."],
    ["HAND LEFT","Left hand pain."],
    ["FINGERS BOTH","Fingers pain."],
    ["FINGERS RT LT","Fingers pain."],
    ["FINGERS LT RT","Fingers pain."],
    ["FINGERS RT","Right fingers pain."],
    ["FINGERS LT","Left fingers pain."],
    ["FINGERS RIGHT","Right fingers pain."],
    ["FINGERS LEFT","Left fingers pain."],
    ["THUMB RT","Right thumb pain."],
    ["THUMB LT","Left thumb pain."],
    ["THUMB RIGHT","Right thumb pain."],
    ["THUMB LEFT","Left thumb pain."],
    ["CARDIAC","Chest pain."],
    ["PROSTATE","Elevated PSA."],
    ["CHEST","Chest pain."],
    ["THORAX","Chest pain."],
    ["ABDOMEN PELVIS","Abdominal pain."],
    ["ANGIOGRAM","Risk factors for coronary artery stenosis."],
    ["SINUSES","Sinusitis."],
    ["LIVER","Further investigation of liver."],
    ["ENTEROGRAPHY","Abdominal pain."],
    ["PANCREAS WITH CO","Further investigation of pancreas."],
    ["SPLEEN","Abdominal pain and bloating."],
    ["TIBIA AND FIBULA","Calf pain."],
    ["SPINE SACRUM","Sacral pain."],
    ["FISTULA PERIANAL","Fistula."],
    ["ENTEROGRAPHY","Abdominal pain. Concern for small bowel abnormality."],
    ["PANCREAS","Abdominal pain. Concern for pancreatic abnormality."],
    ["SMALL BOWEL","Further investigation of small bowel."],
    ["KIDNEY","Further investigation of kidneys."],
    ["RENAL","Further investigation of renals."],
    ["ADRENAL","Further investigation of adrenals."],
    ["F-18 PSMA","Elevated PSA."],
    ["MRCP","Possible biliary abnormality."],
    ["DEXA","Assess bone mineral density."],
    ["MANDIBLE","Jaw pain."]
];

const DIAGNOSIS_START = [
    "Summary:",
    "Summary",
    "SUMMARY:",
    "SUMMARY",
    "Impression:",
    "Impression.",
    "Impression",
    "IMPRESSION:",
    "IMPRESSION.",
    "IMPRESSION",
    "Conclusion:",
    "conclusion:",
    "Conclusion",
    "CONCLUSION:",
    "CONCLUSION",
    "Opinion/recommendations:",
    "Opinion:",
    "Opinion",
    "OPINION:",
    "OPINION",
    "Findings:",
    "Findings",
    "FINDINGS:",
    "FINDINGS",
    "Radiologist Report:",
    "Radiologist’s report",
    "Radiologist's report",
    "RADIOLOGY REPORT",
    "RADIOLOGIST'S REPORT",
    "Interpretation:",
    "Interpretation",
    "Key findings:",
    "Key findings"
];

const DIAGNOSIS_END = [
    "Report Severity",
    "Signed by",
    "Reported by",
    "Signed By",
    "Reported By",
    "REPORT SEVERITY",
    "SIGNED BY",
    "REPORTED BY",
    "CONTRIBUTER:",
    "Dr"
];

const BLACKLIST_REPLACE_SYMPTOMS_OR_DIAGNOSIS = [
    "SEE REFERRAL.",
    "SEE REFERRAL",
    "SEE REPORT.",
    "SEE REPORT",
    "SEE ABOVE.",
    "SEE ABOVE",
    "REQUEST.",
    "REQUEST",
    "AS PER REQUEST.",
    "AS PER REQUEST",
    "RECALL.",
    "RECALL",
    "SEE CLINICAL REFERRAL.",
    "SEE CLINICAL REFERRAL",
    "AS PER REFERRAL.",
    "AS PER REFERRAL",
    "PER REFERRAL.",
    "PER REFERRAL",
    "AS PER ABOVE.",
    "AS PER ABOVE",
    "AS ABOVE.",
    "AS ABOVE",
    "THE ABOVE.",
    "THE ABOVE",
    "SEE REQUIRE.",
    "SEE REQUIRE",
    "SEE REQUEST.",
    "SEE REQUEST",
    "SEE SCANNED REQUEST.",
    "SEE SCANNED REQUEST",
    "SEE ATTACHED REQUEST FORM.",
    "SEE ATTACHED REQUEST FORM",
    "SEE SCANNED REQUEST FORM.",
    "SEE SCANNED REQUEST FORM",
    "FINDINGS AS DESCRIBED.",
    "FINDINGS AS DESCRIBED",
    "FINDINGS AS DESCRIBED ABOVE.",
    "FINDINGS AS DESCRIBED ABOVE",
    "FOCAL FINDINGS AS DESCRIBED.",
    "FOCAL FINDINGS AS DESCRIBED",
    "THIS STUDY.",
    "THIS STUDY",
    "AS PER PREVIOUS REPORT.",
    "AS PER PREVIOUS REPORT",
    "SEE REQUEST. NO PRIOR IMAGING FOR COMPARISON.",
    "SEE REQUEST. NO PRIOR IMAGING FOR COMPARISON",
    "SEE REQUEST: NO PRIOR IMAGING FOR COMPARISON.",
    "SEE REQUEST: NO PRIOR IMAGING FOR COMPARISON"
];

const BLACKLIST_REMOVE_FROM_TEXT = [
    "See referral.",
    "See referral",
    "Per referral.",
    "As above.",
    "As above",
    ", see referral.",
    " see referral.",
    " see referral",
    ", as above",
    " as above",
    ", as described above",
    " as described above",
    ", as described",
    " as described",
    ", described",
    " described",
    ", as outlined above",
    " as outlined above",
    ", as outlined",
    " as outlined",
    " is noted",
    " are noted",
    " noted",
    " is seen",
    " are seen",
    " seen",
    ", is observed",
    " is observed",
    ", is demonstrated",
    " is demonstrated",
    ", as per as per request.",
    " as per as per request.",
    ", amenable to MSK Radiology Ultrasound guided subacromial bursa injection if symptomatic",
    ", amenable to MSK Radiology Ultrasound guided injection if symptomatic",
    ", amenable to MSK Radiology Ultrasound guided injection if unresponsive to conservative management",
    ", amenable to Ultrasound guided injection (hydrodilatation) to aid conservative management if persistent symptoms",
    ", Specialist Upper Limb Orthopaedic review recommended if persisting symptoms",
    " amenable to CT-Guided Right Proximal hamstring tendon complex PRP injection if unresponsive to conservative management",
    ", Spinal Orthopaedic review recommended",
    " on recent ultrasound.",
    ", correlation with thyroid ultrasound is advised.",
    "Orthopaedic opinion should be sought",
    "Prompt neurosurgical opinion advised",
    "Prompt specialist opinion should be sought",
    "Please note segmentation anomaly",
    "Orthopedic consultation is recommended",
    "Other findings as described above",
    "Correlation with past medical history needed",
    "Discussion at MDT recommended",
    "Non targeted biopsies recommended as deemed appropriate.",
    "No prior imaging for comparison.",
    "Spinal surgical opinion is advised",
    "Limited study secondary to motion artefact.",
    "No previous imaging available for comparison.",
    "See attached request form.",
    "The images are mildly degraded by motion artefact.",
    "Standard multiplanar technique.",
    "See details above.",
    "See scanned request.",
    "Recommend orthopaedic consultation.",
    "Imaging is severely degraded by extensive patient motion.",
    "Non target biopsies as deemed clinically appropriate.",
    "No previous MRIs for comparison.",
    " , however",
    " - see above"
];

const BLACKLIST_REMOVE_SENTENCES = [
    "protocol",
    "amenable",
    "artefact",
    "limited",
    "review",
    "advised",
    "nondiagnostic",
    "recall",
    "benefit",
    "consider",
    "evaluated",
    "reassessed",
    "suggested",
    "comparison",
    "relevant",
    "would be better",
    "may be necessary",
    "CT KUB is a study",
    "study is not sufficient",
    "may be useful",
    "would be useful",
    "thank you",
    "perhaps further",
    "clinical evaluation",
    "surgical opinion",
    "orthopaedic opinion",
    "correlation needed",
    "correlation required",
    "recommend correlation",
    "If ",
    "Is ",
    "Are ",
    "Do ",
    "Does "
];

const SIMPLE_CODES = [
    ["OPTIC","92","0096","62300011","62310011"],
    ["ORBIT","92","0096","62300011","62310011"],
    ["IAM","93","0097","62300021","62310021"],
    ["BRAIN MRI IAM","93","0097","62300021","62310021"],
    ["BRAIN IAM","93","0097","62300021","62310021"],
    ["MRI MRA","137","0115","62300201","62310201"],
    ["MRA BRAIN","137","0115","62300201","62310201"],
    ["MRA HEAD","137","0115","62300201","62310201"],
    ["BRAIN MRA","137","0115","62300201","62310201"],
    ["CAROTID","599","0418","62300221","62310221"],
    ["PITUITARY","42","0098","62300031","62310031"],
    ["SINUS","94","0099","62300041","62310041"],
    ["SIJ","181","0143","62301031","62311031"],
    ["TMJ","118","0141","62301011","62311011"],
    ["HIP","430","0225","62301161","62311161"],
    ["PELVIS HIP","430","0225","62301161","62311161"],
    ["ANKLE BOTH","556","0207","62307011","62317001"],
    ["ANKLE RT LT","556","0207","62307011","62317001"],
    ["ANKLE LT RT","556","0207","62307011","62317001"],
    ["ANKLE","433","0207","62307011","62317001"],
    ["ACHILLES BOTH","556","0207","62307011","62317001"],
    ["ACHILLES RT LT","556","0207","62307011","62317001"],
    ["ACHILLES LT RT","556","0207","62307011","62317001"],
    ["ACHILLES","433","0207","62307011","62317001"],
    ["SHOULDER BOTH","561","0208","62307081","62317081"],
    ["SHOULDER RT LT","561","0208","62307081","62317081"],
    ["SHOULDER LT RT","561","0208","62307081","62317081"],
    ["SHOULDER","434","0208","62307081","62317081"],
    ["ELBOW BOTH","562","0209","62307101","62317101"],
    ["ELBOW RT LT","562","0209","62307101","62317101"],
    ["ELBOW LT RT","562","0209","62307101","62317101"],
    ["ELBOW","435","0209","62307101","62317101"],
    ["WRISTS BOTH","563","0210","62307121","62317121"],
    ["WRISTS RT LT","563","0210","62307121","62317121"],
    ["WRISTS LT RT","563","0210","62307121","62317121"],
    ["WRIST BOTH","563","0210","62307121","62317121"],
    ["WRIST RT LT","563","0210","62307121","62317121"],
    ["WRIST LT RT","563","0210","62307121","62317121"],
    ["WRIST","436","0210","62307121","62317121"],
    ["HAND BOTH","563","0","62301011","62311011"],
    ["HAND RT LT","563","0","62301011","62311011"],
    ["HAND LT RT","563","0","62301011","62311011"],
    ["HAND","436","0","62301011","62311011"],
    ["MRCP","134","0188","62301601","62311601"],
    ["PANCREAS","134","0188","62301601","62311601"],
    ["RECT","366","0197","62301361","62311361"],
    ["PROSTATE","879","0198","62307251","62317251"],
    ["KIDNEY","602","0187","62307161","62317161"],
    ["MRA RENAL","143","0122","62301801","62311801"],
    ["ADRENAL","601","0186","62307151","62317151"],
    ["RENAL","602","0187","62307161","62317161"],
    ["FISTULA","131","0181","62301511","62311511"],
    ["CARDIAC","270","0161","62301221","62311221"],
    ["BREAST","186","0190","62307001","62307001"]
];

const COMPLEX_CODES = [
    ["BRAIN","ENCEPHALOPATHY","95","0100","62300051","62310051","rgb(255,255,255)"],
    ["BRAIN","ENCEPHALITIS","44","0101","62300061","62310061","rgb(255,255,255)"],
    ["BRAIN","LEUKODYSTROPHIES","37","0102","62300071","62310071","rgb(255,255,255)"],
    ["BRAIN","CONGENITAL","97","0105","62300101","62310101","rgb(255,255,255)"],
    ["BRAIN","CHIARI","97","0105","62300101","62310101","rgb(255,255,255)"],
    ["BRAIN","THROMBOSIS","98","0117","62300111","62310111","rgb(255,255,255)"],
    ["BRAIN","MYOCLONUS","101","0110","62300141","62310141","rgb(255,255,255)"],
    ["BRAIN","MESIAL TEMPORAL SCLEROSIS","101","0110","62300141","62310141","rgb(255,255,255)"],
    ["BRAIN","SEIZURE","101","0110","62300141","62310141","rgb(255,255,255)"],
    ["BRAIN","SEIZURES","101","0110","62300141","62310141","rgb(255,255,255)"],
    ["BRAIN","STROKE","135","0113","62300151","62310151","rgb(255,255,255)"],
    ["BRAIN","INFARCT","135","0113","62300151","62310151","rgb(255,255,255)"],
    ["BRAIN","HAEMATOMA","135","0113","62300151","62310151","rgb(255,255,255)"],
    ["BRAIN","FACIAL DROOPING","135","0113","62300151","62310151","rgb(255,255,255)"],
    ["BRAIN","FACIAL DROP","135","0113","62300151","62310151","rgb(255,255,255)"],
    ["BRAIN","APHASIA","135","0113","62300151","62310151","rgb(255,255,255)"],
    ["BRAIN","TRAUMA","99","0109","0","0","rgb(224, 64, 251)"],
    ["BRAIN","RTA","99","0109","0","0","rgb(224, 64, 251)"],
    ["BRAIN","ROAD TRAFFIC ACCIDENT","99","0109","0","0","rgb(224, 64, 251)"],
    ["BRAIN","POST TRAUMATIC","99","0109","0","0","rgb(224, 64, 251)"],
    ["BRAIN","POST TRAUMA","99","0109","0","0","rgb(224, 64, 251)"],
    ["BRAIN","INJURY","99","0109","0","0","rgb(224, 64, 251)"],
    ["BRAIN","FALL","99","0109","0","0","rgb(224, 64, 251)"],
    ["BRAIN","CONCUSSIVE HYPOXIA","99","0109","0","0","rgb(224, 64, 251)"],
    ["BRAIN","ACCIDENT","99","0109","0","0","rgb(224, 64, 251)"],
    ["BRAIN","VERTEBROPLASTY","47","0112","62300161","62310161","rgb(255, 255, 0)"],
    ["BRAIN","VENTRICULOSTOMY","47","0112","62300161","62310161","rgb(255, 255, 0)"],
    ["BRAIN","SURGICAL","47","0112","62300161","62310161","rgb(255, 255, 0)"],
    ["BRAIN","SURGERY","47","0112","62300161","62310161","rgb(255, 255, 0)"],
    ["BRAIN","SPINAL FUSION","47","0112","62300161","62310161","rgb(255, 255, 0)"],
    ["BRAIN","SHUNT INSERTION","47","0112","62300161","62310161","rgb(255, 255, 0)"],
    ["BRAIN","RADIOSURGERY","47","0112","62300161","62310161","rgb(255, 255, 0)"],
    ["BRAIN","POSTOPERATIVE","47","0112","62300161","62310161","rgb(255, 255, 0)"],
    ["BRAIN","MYOMECTOMY","47","0112","62300161","62310161","rgb(255, 255, 0)"],
    ["BRAIN","MICRODISKECTOMY","47","0112","62300161","62310161","rgb(255, 255, 0)"],
    ["BRAIN","LAMINECTOMY","47","0112","62300161","62310161","rgb(255, 255, 0)"],
    ["BRAIN","KYPHOPLASTY","47","0112","62300161","62310161","rgb(255, 255, 0)"],
    ["BRAIN","HEMISPHERECTOMY","47","0112","62300161","62310161","rgb(255, 255, 0)"],
    ["BRAIN","FUSION","47","0112","62300161","62310161","rgb(255, 255, 0)"],
    ["BRAIN","FORAMINOTOMY","47","0112","62300161","62310161","rgb(255, 255, 0)"],
    ["BRAIN","DISCECTOMY","47","0112","62300161","62310161","rgb(255, 255, 0)"],
    ["BRAIN","DISC REPLACEMENT","47","0112","62300161","62310161","rgb(255, 255, 0)"],
    ["BRAIN","DECOMPRESSION","47","0112","62300161","62310161","rgb(255, 255, 0)"],
    ["BRAIN","DBS","47","0112","62300161","62310161","rgb(255, 255, 0)"],
    ["BRAIN","CRANIOTOMY","47","0112","62300161","62310161","rgb(255, 255, 0)"],
    ["BRAIN","ADR","47","0112","62300161","62310161","rgb(255, 255, 0)"],
    ["BRAIN","ACDF","47","0112","62300161","62310161","rgb(255, 255, 0)"],
    ["BRAIN","TUMOUR","91","0095","62300001","62310001","rgb(61, 90, 254)"],
    ["BRAIN","TUMOR","91","0095","62300001","62310001","rgb(61, 90, 254)"],
    ["BRAIN","SOFT TISSUE MASS","91","0095","62300001","62310001","rgb(61, 90, 254)"],
    ["BRAIN","SARCOMA","91","0095","62300001","62310001","rgb(61, 90, 254)"],
    ["BRAIN","RESIDUAL","91","0095","62300001","62310001","rgb(61, 90, 254)"],
    ["BRAIN","RESECTION","91","0095","62300001","62310001","rgb(61, 90, 254)"],
    ["BRAIN","REMISSION","91","0095","62300001","62310001","rgb(61, 90, 254)"],
    ["BRAIN","PROLACTIN","91","0095","62300001","62310001","rgb(61, 90, 254)"],
    ["BRAIN","POST RESECTION","91","0095","62300001","62310001","rgb(61, 90, 254)"],
    ["BRAIN","POST DEBULKING","91","0095","62300001","62310001","rgb(61, 90, 254)"],
    ["BRAIN","POLYCYSTIC","91","0095","62300001","62310001","rgb(61, 90, 254)"],
    ["BRAIN","OVARIAN CYST","91","0095","62300001","62310001","rgb(61, 90, 254)"],
    ["BRAIN","ONCOLOGY","91","0095","62300001","62310001","rgb(61, 90, 254)"],
    ["BRAIN","NEUROFIBROMATOSIS","91","0095","62300001","62310001","rgb(61, 90, 254)"],
    ["BRAIN","NEOPLASM","91","0095","62300001","62310001","rgb(61, 90, 254)"],
    ["BRAIN","MORTON","91","0095","62300001","62310001","rgb(61, 90, 254)"],
    ["BRAIN","METASTATIC","91","0095","62300001","62310001","rgb(61, 90, 254)"],
    ["BRAIN","METASTASIS","91","0095","62300001","62310001","rgb(61, 90, 254)"],
    ["BRAIN","METASTASES","91","0095","62300001","62310001","rgb(61, 90, 254)"],
    ["BRAIN","MENINGIOMA","91","0095","62300001","62310001","rgb(61, 90, 254)"],
    ["BRAIN","MELANOMA","91","0095","62300001","62310001","rgb(61, 90, 254)"],
    ["BRAIN","MASS","91","0095","62300001","62310001","rgb(61, 90, 254)"],
    ["BRAIN","MALIGNANCY","91","0095","62300001","62310001","rgb(61, 90, 254)"],
    ["BRAIN","LYMPHOMA","91","0095","62300001","62310001","rgb(61, 90, 254)"],
    ["BRAIN","LIPOMA","91","0095","62300001","62310001","rgb(61, 90, 254)"],
    ["BRAIN","LEUKEMIA","91","0095","62300001","62310001","rgb(61, 90, 254)"],
    ["BRAIN","GLIOMA","91","0095","62300001","62310001","rgb(61, 90, 254)"],
    ["BRAIN","GLIOBLASTOMA","91","0095","62300001","62310001","rgb(61, 90, 254)"],
    ["BRAIN","GBM","91","0095","62300001","62310001","rgb(61, 90, 254)"],
    ["BRAIN","DERMOID","91","0095","62300001","62310001","rgb(61, 90, 254)"],
    ["BRAIN","CYSTIC LESION","91","0095","62300001","62310001","rgb(61, 90, 254)"],
    ["BRAIN","CHEMOTHERAPY","91","0095","62300001","62310001","rgb(61, 90, 254)"],
    ["BRAIN","CARCINOMA","91","0095","62300001","62310001","rgb(61, 90, 254)"],
    ["BRAIN","CANCER","91","0095","62300001","62310001","rgb(61, 90, 254)"],
    ["BRAIN","BIOPSY","91","0095","62300001","62310001","rgb(61, 90, 254)"],
    ["BRAIN","ARACHNOID","91","0095","62300001","62310001","rgb(61, 90, 254)"],
    ["BRAIN","WHITE MATTER","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","UPPER MOTOR","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","UNSTEADY GAIT","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","TREMOR","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","SMALL VESSEL ISCHAEMIC","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","SMALL VESSEL ISCHAEMIA","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","SMALL VESSEL DISEASE","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","SCLEROSIS","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","PLAQUES","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","PARKINSON","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","NEURODEGENERATIVE","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","MYELIN","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","MULTIPLE SCLEROSIS","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","MS","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","MEMORY LOSS","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","MEMORY DIFFICULTIES","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","MEMORY","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","MAGNIMS","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","LEUKODYSTROPHIES","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","LEUKOARAIOSIS","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","ISCHEMIC","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","ISCHEMIA","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","HYPERTENSION","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","HYPERINTENSITY","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","HYPERINTENSITIES","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","FACIAL PAIN","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","DYSPHASIA","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","DEMYELINATION","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","DEMYELINATING","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","DEMENTIA","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","CONFUSION","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","COGNITIVE","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","CEREBROVASCULAR","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","BRADYKINESIA","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","ATAXIA","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","ARM NEEDLES","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","ALZHEIMER","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","ULNAR SYMPTOMS","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","TINGLING","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","SENSORY","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","SCIATICA","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","REDUCED SENSATION","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","PINS AND NEEDLES","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","PARESTHESIA","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","PARASTHESIA","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","PARALYSIS","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","PARAESTHESIA","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","NUMBNESS","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","NEEDLES","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","HYPOESTHESIA","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","HYPERSENSITIVITY","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","HYPERALGESIA","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","DYSSYNERGIA","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","DYSESTHESIA","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","DYSAESTHESIA","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","CLAUDICATION","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","BURNING SENSATION","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","BURNING","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","BRACHIALGIA","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","ANESTHESIA","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","ALTERED SENSATION","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["BRAIN","ALLODYNIA","96","0104","62300091","62310091","rgb(105, 240, 174)"],
    ["CERV","REDUCED REFLEX","424","0466","62300481","62310481","rgb(255,255,255)"],
    ["CERV","FOOT DROP","424","0466","62300481","62310481","rgb(255,255,255)"],
    ["CERV","LOSS OF JERK","424","0466","62300481","62310481","rgb(255,255,255)"],
    ["CERV","MUSCLE WASTING","425","0467","62300491","62310491","rgb(255,255,255)"],
    ["CERV","WEAKNESS","429","0468","62300531","62310531","rgb(255,255,255)"],
    ["CERV","REDUCED POWER","429","0468","62300531","62310531","rgb(255,255,255)"],
    ["CERV","DECREASED POWER","429","0468","62300531","62310531","rgb(255,255,255)"],
    ["CERV","LOSS OF POWER","429","0468","62300531","62310531","rgb(255,255,255)"],
    ["CERV","CHIARI","522","0473","62300441","62310441","rgb(255,255,255)"],
    ["CERV","SYRINX","523","0474","62300451","62310451","rgb(255,255,255)"],
    ["CERV","MYELOPATHY","524","0475","62300461","62310461","rgb(255,255,255)"],
    ["CERV","PREGNANCY","527","0478","62300561","62310561","rgb(255,255,255)"],
    ["CERV","SCOLIOSIS","1071","0","0","0","rgb(255,255,255)"],
    ["CERV","TRAUMA","526","0477","62300551","62310551","rgb(224, 64, 251)"],
    ["CERV","SPRAIN","526","0477","62300551","62310551","rgb(224, 64, 251)"],
    ["CERV","RTA","526","0477","62300551","62310551","rgb(224, 64, 251)"],
    ["CERV","ROAD TRAFFIC ACCIDENT","526","0477","62300551","62310551","rgb(224, 64, 251)"],
    ["CERV","POST TRAUMATIC","526","0477","62300551","62310551","rgb(224, 64, 251)"],
    ["CERV","POST TRAUMA","526","0477","62300551","62310551","rgb(224, 64, 251)"],
    ["CERV","INJURY","526","0477","62300551","62310551","rgb(224, 64, 251)"],
    ["CERV","FALL","526","0477","62300551","62310551","rgb(224, 64, 251)"],
    ["CERV","CONCUSSIVE HYPOXIA","526","0477","62300551","62310551","rgb(224, 64, 251)"],
    ["CERV","ACCIDENT","526","0477","62300551","62310551","rgb(224, 64, 251)"],
    ["CERV","VERTEBROPLASTY","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CERV","VENTRICULOSTOMY","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CERV","SURGICAL","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CERV","SURGERY","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CERV","SPINAL FUSION","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CERV","SHUNT INSERTION","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CERV","RADIOSURGERY","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CERV","POSTOPERATIVE","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CERV","MYOMECTOMY","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CERV","MICRODISKECTOMY","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CERV","LAMINECTOMY","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CERV","KYPHOPLASTY","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CERV","HEMISPHERECTOMY","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CERV","FUSION","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CERV","FORAMINOTOMY","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CERV","DISCECTOMY","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CERV","DISC REPLACEMENT","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CERV","DECOMPRESSION","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CERV","DBS","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CERV","CRANIOTOMY","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CERV","ADR","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CERV","ACDF","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CERV","TUMOUR","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CERV","TUMOR","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CERV","SOFT TISSUE MASS","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CERV","SARCOMA","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CERV","RESECTION","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CERV","REMISSION","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CERV","PROLACTIN","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CERV","POST RESECTION","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CERV","POST DEBULKING","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CERV","ONCOLOGY","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CERV","NEUROFIBROMATOSIS","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CERV","NEOPLASM","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CERV","MORTON","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CERV","METASTATIC","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CERV","METASTASIS","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CERV","METASTASES","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CERV","MENINGIOMA","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CERV","MELANOMA","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CERV","MASS","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CERV","MALIGNANCY","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CERV","LYMPHOMA","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CERV","LIPOMA","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CERV","LEUKEMIA","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CERV","GLIOMA","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CERV","DERMOID","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CERV","CYSTIC LESION","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CERV","CHEMOTHERAPY","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CERV","CARCINOMA","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CERV","CANCER","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CERV","BIOPSY","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CERV","ARACHNOID","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CERV","WHITE MATTER","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CERV","UPPER MOTOR","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CERV","UNSTEADY GAIT","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CERV","TREMOR","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CERV","SMALL VESSEL ISCHAEMIC","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CERV","SMALL VESSEL ISCHAEMIA","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CERV","SMALL VESSEL DISEASE","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CERV","SCLEROSIS","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CERV","PLAQUES","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CERV","PARKINSON","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CERV","NEURODEGENERATIVE","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CERV","MYELIN","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CERV","MULTIPLE SCLEROSIS","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CERV","MS","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CERV","MEMORY LOSS","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CERV","MEMORY DIFFICULTIES","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CERV","MEMORY","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CERV","MAGNIMS","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CERV","LOBE ATROPHY","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CERV","LEUKODYSTROPHIES","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CERV","LEUKOARAIOSIS","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CERV","ISCHEMIC","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CERV","ISCHEMIA","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CERV","HYPERTENSION","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CERV","HYPERINTENSITY","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CERV","HYPERINTENSITIES","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CERV","FORGETFULNESS","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CERV","FACIAL PAIN","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CERV","DYSPHASIA","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CERV","DEMYELINATION","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CERV","DEMYELINATING","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CERV","DEMENTIA","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CERV","CONFUSION","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CERV","COGNITIVE","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CERV","COGNITION","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CERV","CEREBROVASCULAR","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CERV","BRADYKINESIA","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CERV","ATAXIA","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CERV","ARM NEEDLES","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CERV","ALZHEIMER","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CERV","ULNAR SYMPTOMS","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CERV","TINGLING","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CERV","SENSORY","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CERV","SCIATICA","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CERV","REDUCED SENSATION","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CERV","PINS AND NEEDLES","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CERV","PARESTHESIA","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CERV","PARASTHESIA","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CERV","PARALYSIS","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CERV","PARAESTHESIA","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CERV","NUMBNESS","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CERV","NEEDLES","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CERV","HYPOESTHESIA","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CERV","HYPERSENSITIVITY","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CERV","HYPERALGESIA","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CERV","DYSSYNERGIA","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CERV","DYSESTHESIA","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CERV","DYSAESTHESIA","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CERV","CLAUDICATION","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CERV","BURNING SENSATION","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CERV","BURNING","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CERV","BRACHIALGIA","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CERV","ANESTHESIA","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CERV","ALTERED SENSATION","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CERV","ALLODYNIA","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CSPINE","REDUCED REFLEX","424","0466","62300481","62310481","rgb(255,255,255)"],
    ["CSPINE","FOOT DROP","424","0466","62300481","62310481","rgb(255,255,255)"],
    ["CSPINE","LOSS OF JERK","424","0466","62300481","62310481","rgb(255,255,255)"],
    ["CSPINE","MUSCLE WASTING","425","0467","62300491","62310491","rgb(255,255,255)"],
    ["CSPINE","WEAKNESS","429","0468","62300531","62310531","rgb(255,255,255)"],
    ["CSPINE","REDUCED POWER","429","0468","62300531","62310531","rgb(255,255,255)"],
    ["CSPINE","DECREASED POWER","429","0468","62300531","62310531","rgb(255,255,255)"],
    ["CSPINE","LOSS OF POWER","429","0468","62300531","62310531","rgb(255,255,255)"],
    ["CSPINE","CHIARI","522","0473","62300441","62310441","rgb(255,255,255)"],
    ["CSPINE","SYRINX","523","0474","62300451","62310451","rgb(255,255,255)"],
    ["CSPINE","MYELOPATHY","524","0475","62300461","62310461","rgb(255,255,255)"],
    ["CSPINE","PREGNANCY","527","0478","62300561","62310561","rgb(255,255,255)"],
    ["CSPINE","SCOLIOSIS","1071","0","0","0","rgb(255,255,255)"],
    ["CSPINE","TRAUMA","526","0477","62300551","62310551","rgb(224, 64, 251)"],
    ["CSPINE","SPRAIN","526","0477","62300551","62310551","rgb(224, 64, 251)"],
    ["CSPINE","RTA","526","0477","62300551","62310551","rgb(224, 64, 251)"],
    ["CSPINE","ROAD TRAFFIC ACCIDENT","526","0477","62300551","62310551","rgb(224, 64, 251)"],
    ["CSPINE","POST TRAUMATIC","526","0477","62300551","62310551","rgb(224, 64, 251)"],
    ["CSPINE","POST TRAUMA","526","0477","62300551","62310551","rgb(224, 64, 251)"],
    ["CSPINE","INJURY","526","0477","62300551","62310551","rgb(224, 64, 251)"],
    ["CSPINE","FALL","526","0477","62300551","62310551","rgb(224, 64, 251)"],
    ["CSPINE","CONCUSSIVE HYPOXIA","526","0477","62300551","62310551","rgb(224, 64, 251)"],
    ["CSPINE","ACCIDENT","526","0477","62300551","62310551","rgb(224, 64, 251)"],
    ["CSPINE","VERTEBROPLASTY","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CSPINE","VENTRICULOSTOMY","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CSPINE","SURGICAL","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CSPINE","SURGERY","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CSPINE","SPINAL FUSION","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CSPINE","SHUNT INSERTION","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CSPINE","RADIOSURGERY","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CSPINE","POSTOPERATIVE","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CSPINE","MYOMECTOMY","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CSPINE","MICRODISKECTOMY","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CSPINE","LAMINECTOMY","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CSPINE","KYPHOPLASTY","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CSPINE","HEMISPHERECTOMY","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CSPINE","FUSION","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CSPINE","FORAMINOTOMY","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CSPINE","DISCECTOMY","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CSPINE","DISC REPLACEMENT","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CSPINE","DECOMPRESSION","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CSPINE","DBS","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CSPINE","CRANIOTOMY","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CSPINE","ADR","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CSPINE","ACDF","525","0476","62300541","62310541","rgb(255, 255, 0)"],
    ["CSPINE","TUMOUR","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CSPINE","TUMOR","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CSPINE","SOFT TISSUE MASS","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CSPINE","SARCOMA","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CSPINE","RESECTION","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CSPINE","REMISSION","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CSPINE","PROLACTIN","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CSPINE","POST RESECTION","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CSPINE","POST DEBULKING","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CSPINE","ONCOLOGY","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CSPINE","NEUROFIBROMATOSIS","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CSPINE","NEOPLASM","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CSPINE","MORTON","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CSPINE","METASTATIC","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CSPINE","METASTASIS","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CSPINE","METASTASES","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CSPINE","MENINGIOMA","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CSPINE","MELANOMA","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CSPINE","MASS","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CSPINE","MALIGNANCY","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CSPINE","LYMPHOMA","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CSPINE","LIPOMA","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CSPINE","LEUKEMIA","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CSPINE","GLIOMA","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CSPINE","DERMOID","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CSPINE","CYSTIC LESION","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CSPINE","CHEMOTHERAPY","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CSPINE","CARCINOMA","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CSPINE","CANCER","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CSPINE","BIOPSY","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CSPINE","ARACHNOID","518","0469","62300401","62310401","rgb(61, 90, 254)"],
    ["CSPINE","WHITE MATTER","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CSPINE","UPPER MOTOR","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CSPINE","UNSTEADY GAIT","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CSPINE","TREMOR","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CSPINE","SMALL VESSEL ISCHAEMIC","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CSPINE","SMALL VESSEL ISCHAEMIA","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CSPINE","SMALL VESSEL DISEASE","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CSPINE","SCLEROSIS","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CSPINE","PLAQUES","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CSPINE","PARKINSON","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CSPINE","NEURODEGENERATIVE","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CSPINE","MYELIN","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CSPINE","MULTIPLE SCLEROSIS","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CSPINE","MS","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CSPINE","MEMORY LOSS","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CSPINE","MEMORY DIFFICULTIES","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CSPINE","MEMORY","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CSPINE","MAGNIMS","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CSPINE","LOBE ATROPHY","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CSPINE","LEUKODYSTROPHIES","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CSPINE","LEUKOARAIOSIS","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CSPINE","ISCHEMIC","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CSPINE","ISCHEMIA","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CSPINE","HYPERTENSION","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CSPINE","HYPERINTENSITY","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CSPINE","HYPERINTENSITIES","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CSPINE","FORGETFULNESS","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CSPINE","FACIAL PAIN","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CSPINE","DYSPHASIA","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CSPINE","DEMYELINATION","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CSPINE","DEMYELINATING","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CSPINE","DEMENTIA","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CSPINE","CONFUSION","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CSPINE","COGNITIVE","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CSPINE","COGNITION","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CSPINE","CEREBROVASCULAR","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CSPINE","BRADYKINESIA","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CSPINE","ATAXIA","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CSPINE","ARM NEEDLES","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CSPINE","ALZHEIMER","520","0471","62300421","62310421","rgb(105, 240, 174)"],
    ["CSPINE","ULNAR SYMPTOMS","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CSPINE","TINGLING","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CSPINE","SENSORY","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CSPINE","SCIATICA","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CSPINE","REDUCED SENSATION","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CSPINE","PINS AND NEEDLES","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CSPINE","PARESTHESIA","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CSPINE","PARASTHESIA","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CSPINE","PARALYSIS","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CSPINE","PARAESTHESIA","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CSPINE","NUMBNESS","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CSPINE","NEEDLES","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CSPINE","HYPOESTHESIA","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CSPINE","HYPERSENSITIVITY","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CSPINE","HYPERALGESIA","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CSPINE","DYSSYNERGIA","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CSPINE","DYSESTHESIA","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CSPINE","DYSAESTHESIA","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CSPINE","CLAUDICATION","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CSPINE","BURNING SENSATION","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CSPINE","BURNING","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CSPINE","BRACHIALGIA","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CSPINE","ANESTHESIA","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CSPINE","ALTERED SENSATION","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["CSPINE","ALLODYNIA","423","0465","62300471","62310471","rgb(170, 0, 255)"],
    ["THORAC","REDUCED REFLEX","575","0435","62300481","62310481","rgb(255,255,255)"],
    ["THORAC","FOOT DROP","575","0435","62300481","62310481","rgb(255,255,255)"],
    ["THORAC","LOSS OF JERK","575","0435","62300481","62310481","rgb(255,255,255)"],
    ["THORAC","MUSCLE WASTING","576","0436","62300491","62310491","rgb(255,255,255)"],
    ["THORAC","WEAKNESS","568","0437","62300531","62310531","rgb(255,255,255)"],
    ["THORAC","REDUCED POWER","568","0437","62300531","62310531","rgb(255,255,255)"],
    ["THORAC","DECREASED POWER","568","0437","62300531","62310531","rgb(255,255,255)"],
    ["THORAC","LOSS OF POWER","568","0437","62300531","62310531","rgb(255,255,255)"],
    ["THORAC","CHIARI","532","0442","62300441","62310441","rgb(255,255,255)"],
    ["THORAC","SYRINX","533","0443","62300451","62310451","rgb(255,255,255)"],
    ["THORAC","MYELOPATHY","534","0444","62300461","62310461","rgb(255,255,255)"],
    ["THORAC","PREGNANCY","537","0447","62300561","62310561","rgb(255,255,255)"],
    ["THORAC","SCOLIOSIS","1071","0","0","0","rgb(255,255,255)"],
    ["THORAC","TRAUMA","536","0446","62300551","62310551","rgb(224, 64, 251)"],
    ["THORAC","SPRAIN","536","0446","62300551","62310551","rgb(224, 64, 251)"],
    ["THORAC","RTA","536","0446","62300551","62310551","rgb(224, 64, 251)"],
    ["THORAC","ROAD TRAFFIC ACCIDENT","536","0446","62300551","62310551","rgb(224, 64, 251)"],
    ["THORAC","POST TRAUMATIC","536","0446","62300551","62310551","rgb(224, 64, 251)"],
    ["THORAC","POST TRAUMA","536","0446","62300551","62310551","rgb(224, 64, 251)"],
    ["THORAC","INJURY","536","0446","62300551","62310551","rgb(224, 64, 251)"],
    ["THORAC","FALL","536","0446","62300551","62310551","rgb(224, 64, 251)"],
    ["THORAC","CONCUSSIVE HYPOXIA","536","0446","62300551","62310551","rgb(224, 64, 251)"],
    ["THORAC","ACCIDENT","536","0446","62300551","62310551","rgb(224, 64, 251)"],
    ["THORAC","VERTEBROPLASTY","535","0445","62300541","62310541","rgb(255, 255, 0)"],
    ["THORAC","VENTRICULOSTOMY","535","0445","62300541","62310541","rgb(255, 255, 0)"],
    ["THORAC","SURGICAL","535","0445","62300541","62310541","rgb(255, 255, 0)"],
    ["THORAC","SURGERY","535","0445","62300541","62310541","rgb(255, 255, 0)"],
    ["THORAC","SPINAL FUSION","535","0445","62300541","62310541","rgb(255, 255, 0)"],
    ["THORAC","SHUNT INSERTION","535","0445","62300541","62310541","rgb(255, 255, 0)"],
    ["THORAC","RADIOSURGERY","535","0445","62300541","62310541","rgb(255, 255, 0)"],
    ["THORAC","POSTOPERATIVE","535","0445","62300541","62310541","rgb(255, 255, 0)"],
    ["THORAC","MYOMECTOMY","535","0445","62300541","62310541","rgb(255, 255, 0)"],
    ["THORAC","MICRODISKECTOMY","535","0445","62300541","62310541","rgb(255, 255, 0)"],
    ["THORAC","LAMINECTOMY","535","0445","62300541","62310541","rgb(255, 255, 0)"],
    ["THORAC","KYPHOPLASTY","535","0445","62300541","62310541","rgb(255, 255, 0)"],
    ["THORAC","HEMISPHERECTOMY","535","0445","62300541","62310541","rgb(255, 255, 0)"],
    ["THORAC","FUSION","535","0445","62300541","62310541","rgb(255, 255, 0)"],
    ["THORAC","FORAMINOTOMY","535","0445","62300541","62310541","rgb(255, 255, 0)"],
    ["THORAC","DISCECTOMY","535","0445","62300541","62310541","rgb(255, 255, 0)"],
    ["THORAC","DISC REPLACEMENT","535","0445","62300541","62310541","rgb(255, 255, 0)"],
    ["THORAC","DECOMPRESSION","535","0445","62300541","62310541","rgb(255, 255, 0)"],
    ["THORAC","DBS","535","0445","62300541","62310541","rgb(255, 255, 0)"],
    ["THORAC","CRANIOTOMY","535","0445","62300541","62310541","rgb(255, 255, 0)"],
    ["THORAC","ADR","535","0445","62300541","62310541","rgb(255, 255, 0)"],
    ["THORAC","ACDF","535","0445","62300541","62310541","rgb(255, 255, 0)"],
    ["THORAC","TUMOUR","528","0438","62300401","62310401","rgb(61, 90, 254)"],
    ["THORAC","TUMOR","528","0438","62300401","62310401","rgb(61, 90, 254)"],
    ["THORAC","SOFT TISSUE MASS","528","0438","62300401","62310401","rgb(61, 90, 254)"],
    ["THORAC","SARCOMA","528","0438","62300401","62310401","rgb(61, 90, 254)"],
    ["THORAC","RESECTION","528","0438","62300401","62310401","rgb(61, 90, 254)"],
    ["THORAC","REMISSION","528","0438","62300401","62310401","rgb(61, 90, 254)"],
    ["THORAC","PROLACTIN","528","0438","62300401","62310401","rgb(61, 90, 254)"],
    ["THORAC","POST RESECTION","528","0438","62300401","62310401","rgb(61, 90, 254)"],
    ["THORAC","POST DEBULKING","528","0438","62300401","62310401","rgb(61, 90, 254)"],
    ["THORAC","ONCOLOGY","528","0438","62300401","62310401","rgb(61, 90, 254)"],
    ["THORAC","NEUROFIBROMATOSIS","528","0438","62300401","62310401","rgb(61, 90, 254)"],
    ["THORAC","NEOPLASM","528","0438","62300401","62310401","rgb(61, 90, 254)"],
    ["THORAC","MORTON","528","0438","62300401","62310401","rgb(61, 90, 254)"],
    ["THORAC","METASTATIC","528","0438","62300401","62310401","rgb(61, 90, 254)"],
    ["THORAC","METASTASIS","528","0438","62300401","62310401","rgb(61, 90, 254)"],
    ["THORAC","METASTASES","528","0438","62300401","62310401","rgb(61, 90, 254)"],
    ["THORAC","MENINGIOMA","528","0438","62300401","62310401","rgb(61, 90, 254)"],
    ["THORAC","MELANOMA","528","0438","62300401","62310401","rgb(61, 90, 254)"],
    ["THORAC","MASS","528","0438","62300401","62310401","rgb(61, 90, 254)"],
    ["THORAC","MALIGNANCY","528","0438","62300401","62310401","rgb(61, 90, 254)"],
    ["THORAC","LYMPHOMA","528","0438","62300401","62310401","rgb(61, 90, 254)"],
    ["THORAC","LIPOMA","528","0438","62300401","62310401","rgb(61, 90, 254)"],
    ["THORAC","LEUKEMIA","528","0438","62300401","62310401","rgb(61, 90, 254)"],
    ["THORAC","GLIOMA","528","0438","62300401","62310401","rgb(61, 90, 254)"],
    ["THORAC","DERMOID","528","0438","62300401","62310401","rgb(61, 90, 254)"],
    ["THORAC","CYSTIC LESION","528","0438","62300401","62310401","rgb(61, 90, 254)"],
    ["THORAC","CHEMOTHERAPY","528","0438","62300401","62310401","rgb(61, 90, 254)"],
    ["THORAC","CARCINOMA","528","0438","62300401","62310401","rgb(61, 90, 254)"],
    ["THORAC","CANCER","528","0438","62300401","62310401","rgb(61, 90, 254)"],
    ["THORAC","BIOPSY","528","0438","62300401","62310401","rgb(61, 90, 254)"],
    ["THORAC","ARACHNOID","528","0438","62300401","62310401","rgb(61, 90, 254)"],
    ["THORAC","WHITE MATTER","530","0440","62300421","62310421","rgb(105, 240, 174)"],
    ["THORAC","UPPER MOTOR","530","0440","62300421","62310421","rgb(105, 240, 174)"],
    ["THORAC","UNSTEADY GAIT","530","0440","62300421","62310421","rgb(105, 240, 174)"],
    ["THORAC","TREMOR","530","0440","62300421","62310421","rgb(105, 240, 174)"],
    ["THORAC","SMALL VESSEL ISCHAEMIC","530","0440","62300421","62310421","rgb(105, 240, 174)"],
    ["THORAC","SMALL VESSEL ISCHAEMIA","530","0440","62300421","62310421","rgb(105, 240, 174)"],
    ["THORAC","SMALL VESSEL DISEASE","530","0440","62300421","62310421","rgb(105, 240, 174)"],
    ["THORAC","SCLEROSIS","530","0440","62300421","62310421","rgb(105, 240, 174)"],
    ["THORAC","PLAQUES","530","0440","62300421","62310421","rgb(105, 240, 174)"],
    ["THORAC","PARKINSON","530","0440","62300421","62310421","rgb(105, 240, 174)"],
    ["THORAC","NEURODEGENERATIVE","530","0440","62300421","62310421","rgb(105, 240, 174)"],
    ["THORAC","MYELIN","530","0440","62300421","62310421","rgb(105, 240, 174)"],
    ["THORAC","MULTIPLE SCLEROSIS","530","0440","62300421","62310421","rgb(105, 240, 174)"],
    ["THORAC","MS","530","0440","62300421","62310421","rgb(105, 240, 174)"],
    ["THORAC","MEMORY LOSS","530","0440","62300421","62310421","rgb(105, 240, 174)"],
    ["THORAC","MEMORY DIFFICULTIES","530","0440","62300421","62310421","rgb(105, 240, 174)"],
    ["THORAC","MEMORY","530","0440","62300421","62310421","rgb(105, 240, 174)"],
    ["THORAC","MAGNIMS","530","0440","62300421","62310421","rgb(105, 240, 174)"],
    ["THORAC","LOBE ATROPHY","530","0440","62300421","62310421","rgb(105, 240, 174)"],
    ["THORAC","LEUKODYSTROPHIES","530","0440","62300421","62310421","rgb(105, 240, 174)"],
    ["THORAC","LEUKOARAIOSIS","530","0440","62300421","62310421","rgb(105, 240, 174)"],
    ["THORAC","ISCHEMIC","530","0440","62300421","62310421","rgb(105, 240, 174)"],
    ["THORAC","ISCHEMIA","530","0440","62300421","62310421","rgb(105, 240, 174)"],
    ["THORAC","HYPERTENSION","530","0440","62300421","62310421","rgb(105, 240, 174)"],
    ["THORAC","HYPERINTENSITY","530","0440","62300421","62310421","rgb(105, 240, 174)"],
    ["THORAC","HYPERINTENSITIES","530","0440","62300421","62310421","rgb(105, 240, 174)"],
    ["THORAC","FORGETFULNESS","530","0440","62300421","62310421","rgb(105, 240, 174)"],
    ["THORAC","FACIAL PAIN","530","0440","62300421","62310421","rgb(105, 240, 174)"],
    ["THORAC","DYSPHASIA","530","0440","62300421","62310421","rgb(105, 240, 174)"],
    ["THORAC","DEMYELINATION","530","0440","62300421","62310421","rgb(105, 240, 174)"],
    ["THORAC","DEMYELINATING","530","0440","62300421","62310421","rgb(105, 240, 174)"],
    ["THORAC","DEMENTIA","530","0440","62300421","62310421","rgb(105, 240, 174)"],
    ["THORAC","CONFUSION","530","0440","62300421","62310421","rgb(105, 240, 174)"],
    ["THORAC","COGNITIVE","530","0440","62300421","62310421","rgb(105, 240, 174)"],
    ["THORAC","COGNITION","530","0440","62300421","62310421","rgb(105, 240, 174)"],
    ["THORAC","CEREBROVASCULAR","530","0440","62300421","62310421","rgb(105, 240, 174)"],
    ["THORAC","BRADYKINESIA","530","0440","62300421","62310421","rgb(105, 240, 174)"],
    ["THORAC","ATAXIA","530","0440","62300421","62310421","rgb(105, 240, 174)"],
    ["THORAC","ARM NEEDLES","530","0440","62300421","62310421","rgb(105, 240, 174)"],
    ["THORAC","ALZHEIMER","530","0440","62300421","62310421","rgb(105, 240, 174)"],
    ["THORAC","ULNAR SYMPTOMS","574","0434","62300471","62310471","rgb(170, 0, 255)"],
    ["THORAC","TINGLING","574","0434","62300471","62310471","rgb(170, 0, 255)"],
    ["THORAC","SENSORY","574","0434","62300471","62310471","rgb(170, 0, 255)"],
    ["THORAC","SCIATICA","574","0434","62300471","62310471","rgb(170, 0, 255)"],
    ["THORAC","REDUCED SENSATION","574","0434","62300471","62310471","rgb(170, 0, 255)"],
    ["THORAC","PINS AND NEEDLES","574","0434","62300471","62310471","rgb(170, 0, 255)"],
    ["THORAC","PARESTHESIA","574","0434","62300471","62310471","rgb(170, 0, 255)"],
    ["THORAC","PARASTHESIA","574","0434","62300471","62310471","rgb(170, 0, 255)"],
    ["THORAC","PARALYSIS","574","0434","62300471","62310471","rgb(170, 0, 255)"],
    ["THORAC","PARAESTHESIA","574","0434","62300471","62310471","rgb(170, 0, 255)"],
    ["THORAC","NUMBNESS","574","0434","62300471","62310471","rgb(170, 0, 255)"],
    ["THORAC","NEEDLES","574","0434","62300471","62310471","rgb(170, 0, 255)"],
    ["THORAC","HYPOESTHESIA","574","0434","62300471","62310471","rgb(170, 0, 255)"],
    ["THORAC","HYPERSENSITIVITY","574","0434","62300471","62310471","rgb(170, 0, 255)"],
    ["THORAC","HYPERALGESIA","574","0434","62300471","62310471","rgb(170, 0, 255)"],
    ["THORAC","DYSSYNERGIA","574","0434","62300471","62310471","rgb(170, 0, 255)"],
    ["THORAC","DYSESTHESIA","574","0434","62300471","62310471","rgb(170, 0, 255)"],
    ["THORAC","DYSAESTHESIA","574","0434","62300471","62310471","rgb(170, 0, 255)"],
    ["THORAC","CLAUDICATION","574","0434","62300471","62310471","rgb(170, 0, 255)"],
    ["THORAC","BURNING SENSATION","574","0434","62300471","62310471","rgb(170, 0, 255)"],
    ["THORAC","BURNING","574","0434","62300471","62310471","rgb(170, 0, 255)"],
    ["THORAC","BRACHIALGIA","574","0434","62300471","62310471","rgb(170, 0, 255)"],
    ["THORAC","ANESTHESIA","574","0434","62300471","62310471","rgb(170, 0, 255)"],
    ["THORAC","ALTERED SENSATION","574","0434","62300471","62310471","rgb(170, 0, 255)"],
    ["THORAC","ALLODYNIA","574","0434","62300471","62310471","rgb(170, 0, 255)"],
    ["LUMB","REDUCED REFLEX","578","0421","62300481","62310481","rgb(255,255,255)"],
    ["LUMB","FOOT DROP","578","0421","62300481","62310481","rgb(255,255,255)"],
    ["LUMB","LOSS OF JERK","578","0421","62300481","62310481","rgb(255,255,255)"],
    ["LUMB","MUSCLE WASTING","579","0422","62300491","62310491","rgb(255,255,255)"],
    ["LUMB","WEAKNESS","571","0423","62300531","62310531","rgb(255,255,255)"],
    ["LUMB","REDUCED POWER","571","0423","62300531","62310531","rgb(255,255,255)"],
    ["LUMB","DECREASED POWER","571","0423","62300531","62310531","rgb(255,255,255)"],
    ["LUMB","LOSS OF POWER","571","0423","62300531","62310531","rgb(255,255,255)"],
    ["LUMB","CHIARI","544","0428","62300441","62310441","rgb(255,255,255)"],
    ["LUMB","SYRINX","517","0429","62300451","62310451","rgb(255,255,255)"],
    ["LUMB","MYELOPATHY","569","0430","62300461","62310461","rgb(255,255,255)"],
    ["LUMB","PREGNANCY","538","0433","62300561","62310561","rgb(255,255,255)"],
    ["LUMB","PROXIMAL LEG","580","0172","62300501","62310501","rgb(255,255,255)"],
    ["LUMB","SCOLIOSIS","1071","0","0","0","rgb(255,255,255)"],
    ["LUMB","TRAUMA","573","0432","62300551","62310551","rgb(224, 64, 251)"],
    ["LUMB","SPRAIN","573","0432","62300551","62310551","rgb(224, 64, 251)"],
    ["LUMB","RTA","573","0432","62300551","62310551","rgb(224, 64, 251)"],
    ["LUMB","ROAD TRAFFIC ACCIDENT","573","0432","62300551","62310551","rgb(224, 64, 251)"],
    ["LUMB","POST TRAUMATIC","573","0432","62300551","62310551","rgb(224, 64, 251)"],
    ["LUMB","POST TRAUMA","573","0432","62300551","62310551","rgb(224, 64, 251)"],
    ["LUMB","INJURY","573","0432","62300551","62310551","rgb(224, 64, 251)"],
    ["LUMB","FALL","573","0432","62300551","62310551","rgb(224, 64, 251)"],
    ["LUMB","CONCUSSIVE HYPOXIA","573","0432","62300551","62310551","rgb(224, 64, 251)"],
    ["LUMB","ACCIDENT","573","0432","62300551","62310551","rgb(224, 64, 251)"],
    ["LUMB","VERTEBROPLASTY","572","0431","62300541","62310541","rgb(255, 255, 0)"],
    ["LUMB","VENTRICULOSTOMY","572","0431","62300541","62310541","rgb(255, 255, 0)"],
    ["LUMB","SURGICAL","572","0431","62300541","62310541","rgb(255, 255, 0)"],
    ["LUMB","SURGERY","572","0431","62300541","62310541","rgb(255, 255, 0)"],
    ["LUMB","SPINAL FUSION","572","0431","62300541","62310541","rgb(255, 255, 0)"],
    ["LUMB","SHUNT INSERTION","572","0431","62300541","62310541","rgb(255, 255, 0)"],
    ["LUMB","RADIOSURGERY","572","0431","62300541","62310541","rgb(255, 255, 0)"],
    ["LUMB","POSTOPERATIVE","572","0431","62300541","62310541","rgb(255, 255, 0)"],
    ["LUMB","MYOMECTOMY","572","0431","62300541","62310541","rgb(255, 255, 0)"],
    ["LUMB","MICRODISKECTOMY","572","0431","62300541","62310541","rgb(255, 255, 0)"],
    ["LUMB","LAMINECTOMY","572","0431","62300541","62310541","rgb(255, 255, 0)"],
    ["LUMB","KYPHOPLASTY","572","0431","62300541","62310541","rgb(255, 255, 0)"],
    ["LUMB","HEMISPHERECTOMY","572","0431","62300541","62310541","rgb(255, 255, 0)"],
    ["LUMB","FUSION","572","0431","62300541","62310541","rgb(255, 255, 0)"],
    ["LUMB","FORAMINOTOMY","572","0431","62300541","62310541","rgb(255, 255, 0)"],
    ["LUMB","DISCECTOMY","572","0431","62300541","62310541","rgb(255, 255, 0)"],
    ["LUMB","DISC REPLACEMENT","572","0431","62300541","62310541","rgb(255, 255, 0)"],
    ["LUMB","DECOMPRESSION","572","0431","62300541","62310541","rgb(255, 255, 0)"],
    ["LUMB","DBS","572","0431","62300541","62310541","rgb(255, 255, 0)"],
    ["LUMB","CRANIOTOMY","572","0431","62300541","62310541","rgb(255, 255, 0)"],
    ["LUMB","ADR","572","0431","62300541","62310541","rgb(255, 255, 0)"],
    ["LUMB","ACDF","572","0431","62300541","62310541","rgb(255, 255, 0)"],
    ["LUMB","TUMOUR","540","0424","62300401","62310401","rgb(61, 90, 254)"],
    ["LUMB","TUMOR","540","0424","62300401","62310401","rgb(61, 90, 254)"],
    ["LUMB","SOFT TISSUE MASS","540","0424","62300401","62310401","rgb(61, 90, 254)"],
    ["LUMB","SARCOMA","540","0424","62300401","62310401","rgb(61, 90, 254)"],
    ["LUMB","RESECTION","540","0424","62300401","62310401","rgb(61, 90, 254)"],
    ["LUMB","REMISSION","540","0424","62300401","62310401","rgb(61, 90, 254)"],
    ["LUMB","PROLACTIN","540","0424","62300401","62310401","rgb(61, 90, 254)"],
    ["LUMB","POST RESECTION","540","0424","62300401","62310401","rgb(61, 90, 254)"],
    ["LUMB","POST DEBULKING","540","0424","62300401","62310401","rgb(61, 90, 254)"],
    ["LUMB","ONCOLOGY","540","0424","62300401","62310401","rgb(61, 90, 254)"],
    ["LUMB","NEUROFIBROMATOSIS","540","0424","62300401","62310401","rgb(61, 90, 254)"],
    ["LUMB","NEOPLASM","540","0424","62300401","62310401","rgb(61, 90, 254)"],
    ["LUMB","MORTON","540","0424","62300401","62310401","rgb(61, 90, 254)"],
    ["LUMB","METASTATIC","540","0424","62300401","62310401","rgb(61, 90, 254)"],
    ["LUMB","METASTASIS","540","0424","62300401","62310401","rgb(61, 90, 254)"],
    ["LUMB","METASTASES","540","0424","62300401","62310401","rgb(61, 90, 254)"],
    ["LUMB","MENINGIOMA","540","0424","62300401","62310401","rgb(61, 90, 254)"],
    ["LUMB","MELANOMA","540","0424","62300401","62310401","rgb(61, 90, 254)"],
    ["LUMB","MASS","540","0424","62300401","62310401","rgb(61, 90, 254)"],
    ["LUMB","MALIGNANCY","540","0424","62300401","62310401","rgb(61, 90, 254)"],
    ["LUMB","LYMPHOMA","540","0424","62300401","62310401","rgb(61, 90, 254)"],
    ["LUMB","LIPOMA","540","0424","62300401","62310401","rgb(61, 90, 254)"],
    ["LUMB","LEUKEMIA","540","0424","62300401","62310401","rgb(61, 90, 254)"],
    ["LUMB","GLIOMA","540","0424","62300401","62310401","rgb(61, 90, 254)"],
    ["LUMB","DERMOID","540","0424","62300401","62310401","rgb(61, 90, 254)"],
    ["LUMB","CYSTIC LESION","540","0424","62300401","62310401","rgb(61, 90, 254)"],
    ["LUMB","CHEMOTHERAPY","540","0424","62300401","62310401","rgb(61, 90, 254)"],
    ["LUMB","CARCINOMA","540","0424","62300401","62310401","rgb(61, 90, 254)"],
    ["LUMB","CANCER","540","0424","62300401","62310401","rgb(61, 90, 254)"],
    ["LUMB","BIOPSY","540","0424","62300401","62310401","rgb(61, 90, 254)"],
    ["LUMB","ARACHNOID","540","0424","62300401","62310401","rgb(61, 90, 254)"],
    ["LUMB","WHITE MATTER","542","0426","62300421","62310421","rgb(105, 240, 174)"],
    ["LUMB","UPPER MOTOR","542","0426","62300421","62310421","rgb(105, 240, 174)"],
    ["LUMB","UNSTEADY GAIT","542","0426","62300421","62310421","rgb(105, 240, 174)"],
    ["LUMB","TREMOR","542","0426","62300421","62310421","rgb(105, 240, 174)"],
    ["LUMB","SMALL VESSEL ISCHAEMIC","542","0426","62300421","62310421","rgb(105, 240, 174)"],
    ["LUMB","SMALL VESSEL ISCHAEMIA","542","0426","62300421","62310421","rgb(105, 240, 174)"],
    ["LUMB","SMALL VESSEL DISEASE","542","0426","62300421","62310421","rgb(105, 240, 174)"],
    ["LUMB","SCLEROSIS","542","0426","62300421","62310421","rgb(105, 240, 174)"],
    ["LUMB","PLAQUES","542","0426","62300421","62310421","rgb(105, 240, 174)"],
    ["LUMB","PARKINSON","542","0426","62300421","62310421","rgb(105, 240, 174)"],
    ["LUMB","NEURODEGENERATIVE","542","0426","62300421","62310421","rgb(105, 240, 174)"],
    ["LUMB","MYELIN","542","0426","62300421","62310421","rgb(105, 240, 174)"],
    ["LUMB","MULTIPLE SCLEROSIS","542","0426","62300421","62310421","rgb(105, 240, 174)"],
    ["LUMB","MS","542","0426","62300421","62310421","rgb(105, 240, 174)"],
    ["LUMB","MEMORY LOSS","542","0426","62300421","62310421","rgb(105, 240, 174)"],
    ["LUMB","MEMORY DIFFICULTIES","542","0426","62300421","62310421","rgb(105, 240, 174)"],
    ["LUMB","MEMORY","542","0426","62300421","62310421","rgb(105, 240, 174)"],
    ["LUMB","MAGNIMS","542","0426","62300421","62310421","rgb(105, 240, 174)"],
    ["LUMB","LOBE ATROPHY","542","0426","62300421","62310421","rgb(105, 240, 174)"],
    ["LUMB","LEUKODYSTROPHIES","542","0426","62300421","62310421","rgb(105, 240, 174)"],
    ["LUMB","LEUKOARAIOSIS","542","0426","62300421","62310421","rgb(105, 240, 174)"],
    ["LUMB","ISCHEMIC","542","0426","62300421","62310421","rgb(105, 240, 174)"],
    ["LUMB","ISCHEMIA","542","0426","62300421","62310421","rgb(105, 240, 174)"],
    ["LUMB","HYPERTENSION","542","0426","62300421","62310421","rgb(105, 240, 174)"],
    ["LUMB","HYPERINTENSITY","542","0426","62300421","62310421","rgb(105, 240, 174)"],
    ["LUMB","HYPERINTENSITIES","542","0426","62300421","62310421","rgb(105, 240, 174)"],
    ["LUMB","FORGETFULNESS","542","0426","62300421","62310421","rgb(105, 240, 174)"],
    ["LUMB","FACIAL PAIN","542","0426","62300421","62310421","rgb(105, 240, 174)"],
    ["LUMB","DYSPHASIA","542","0426","62300421","62310421","rgb(105, 240, 174)"],
    ["LUMB","DEMYELINATION","542","0426","62300421","62310421","rgb(105, 240, 174)"],
    ["LUMB","DEMYELINATING","542","0426","62300421","62310421","rgb(105, 240, 174)"],
    ["LUMB","DEMENTIA","542","0426","62300421","62310421","rgb(105, 240, 174)"],
    ["LUMB","CONFUSION","542","0426","62300421","62310421","rgb(105, 240, 174)"],
    ["LUMB","COGNITIVE","542","0426","62300421","62310421","rgb(105, 240, 174)"],
    ["LUMB","COGNITION","542","0426","62300421","62310421","rgb(105, 240, 174)"],
    ["LUMB","CEREBROVASCULAR","542","0426","62300421","62310421","rgb(105, 240, 174)"],
    ["LUMB","BRADYKINESIA","542","0426","62300421","62310421","rgb(105, 240, 174)"],
    ["LUMB","ATAXIA","542","0426","62300421","62310421","rgb(105, 240, 174)"],
    ["LUMB","ARM NEEDLES","542","0426","62300421","62310421","rgb(105, 240, 174)"],
    ["LUMB","ALZHEIMER","542","0426","62300421","62310421","rgb(105, 240, 174)"],
    ["LUMB","ULNAR SYMPTOMS","577","0420","62300471","62310471","rgb(170, 0, 255)"],
    ["LUMB","TINGLING","577","0420","62300471","62310471","rgb(170, 0, 255)"],
    ["LUMB","SENSORY","577","0420","62300471","62310471","rgb(170, 0, 255)"],
    ["LUMB","SCIATICA","577","0420","62300471","62310471","rgb(170, 0, 255)"],
    ["LUMB","REDUCED SENSATION","577","0420","62300471","62310471","rgb(170, 0, 255)"],
    ["LUMB","PINS AND NEEDLES","577","0420","62300471","62310471","rgb(170, 0, 255)"],
    ["LUMB","PARESTHESIA","577","0420","62300471","62310471","rgb(170, 0, 255)"],
    ["LUMB","PARASTHESIA","577","0420","62300471","62310471","rgb(170, 0, 255)"],
    ["LUMB","PARALYSIS","577","0420","62300471","62310471","rgb(170, 0, 255)"],
    ["LUMB","PARAESTHESIA","577","0420","62300471","62310471","rgb(170, 0, 255)"],
    ["LUMB","NUMBNESS","577","0420","62300471","62310471","rgb(170, 0, 255)"],
    ["LUMB","NEEDLES","577","0420","62300471","62310471","rgb(170, 0, 255)"],
    ["LUMB","HYPOESTHESIA","577","0420","62300471","62310471","rgb(170, 0, 255)"],
    ["LUMB","HYPERSENSITIVITY","577","0420","62300471","62310471","rgb(170, 0, 255)"],
    ["LUMB","HYPERALGESIA","577","0420","62300471","62310471","rgb(170, 0, 255)"],
    ["LUMB","DYSSYNERGIA","577","0420","62300471","62310471","rgb(170, 0, 255)"],
    ["LUMB","DYSESTHESIA","577","0420","62300471","62310471","rgb(170, 0, 255)"],
    ["LUMB","DYSAESTHESIA","577","0420","62300471","62310471","rgb(170, 0, 255)"],
    ["LUMB","CLAUDICATION","577","0420","62300471","62310471","rgb(170, 0, 255)"],
    ["LUMB","BURNING SENSATION","577","0420","62300471","62310471","rgb(170, 0, 255)"],
    ["LUMB","BURNING","577","0420","62300471","62310471","rgb(170, 0, 255)"],
    ["LUMB","BRACHIALGIA","577","0420","62300471","62310471","rgb(170, 0, 255)"],
    ["LUMB","ANESTHESIA","577","0420","62300471","62310471","rgb(170, 0, 255)"],
    ["LUMB","ALTERED SENSATION","577","0420","62300471","62310471","rgb(170, 0, 255)"],
    ["LUMB","ALLODYNIA","577","0420","62300471","62310471","rgb(170, 0, 255)"],
    ["WHOLE","REDUCED REFLEX","583","0449","62300481","62310481","rgb(255,255,255)"],
    ["WHOLE","FOOT DROP","583","0449","62300481","62310481","rgb(255,255,255)"],
    ["WHOLE","LOSS OF JERK","583","0449","62300481","62310481","rgb(255,255,255)"],
    ["WHOLE","MUSCLE WASTING","584","0450","62300491","62310491","rgb(255,255,255)"],
    ["WHOLE","WEAKNESS","584","0450","62300531","62310531","rgb(255,255,255)"],
    ["WHOLE","REDUCED POWER","584","0450","62300531","62310531","rgb(255,255,255)"],
    ["WHOLE","DECREASED POWER","584","0450","62300531","62310531","rgb(255,255,255)"],
    ["WHOLE","LOSS OF POWER","584","0450","62300531","62310531","rgb(255,255,255)"],
    ["WHOLE","CHIARI","593","0456","62300441","62310441","rgb(255,255,255)"],
    ["WHOLE","SYRINX","594","0457","62300451","62310451","rgb(255,255,255)"],
    ["WHOLE","MYELOPATHY","595","0458","62300461","62310461","rgb(255,255,255)"],
    ["WHOLE","PREGNANCY","598","0461","62300561","62310561","rgb(255,255,255)"],
    ["WHOLE","PROXIMAL LEG","585","0219","62300501","62310501","rgb(255,255,255)"],
    ["WHOLE","SCOLIOSIS","1071","0","0","0","rgb(255,255,255)"],
    ["WHOLE","TRAUMA","597","0460","62300551","62310551","rgb(224, 64, 251)"],
    ["WHOLE","SPRAIN","597","0460","62300551","62310551","rgb(224, 64, 251)"],
    ["WHOLE","RTA","597","0460","62300551","62310551","rgb(224, 64, 251)"],
    ["WHOLE","ROAD TRAFFIC ACCIDENT","597","0460","62300551","62310551","rgb(224, 64, 251)"],
    ["WHOLE","POST TRAUMATIC","597","0460","62300551","62310551","rgb(224, 64, 251)"],
    ["WHOLE","POST TRAUMA","597","0460","62300551","62310551","rgb(224, 64, 251)"],
    ["WHOLE","INJURY","597","0460","62300551","62310551","rgb(224, 64, 251)"],
    ["WHOLE","FALL","597","0460","62300551","62310551","rgb(224, 64, 251)"],
    ["WHOLE","CONCUSSIVE HYPOXIA","597","0460","62300551","62310551","rgb(224, 64, 251)"],
    ["WHOLE","ACCIDENT","597","0460","62300551","62310551","rgb(224, 64, 251)"],
    ["WHOLE","VERTEBROPLASTY","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["WHOLE","VENTRICULOSTOMY","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["WHOLE","SURGICAL","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["WHOLE","SURGERY","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["WHOLE","SPINAL FUSION","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["WHOLE","SHUNT INSERTION","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["WHOLE","RADIOSURGERY","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["WHOLE","POSTOPERATIVE","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["WHOLE","MYOMECTOMY","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["WHOLE","MICRODISKECTOMY","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["WHOLE","LAMINECTOMY","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["WHOLE","KYPHOPLASTY","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["WHOLE","HEMISPHERECTOMY","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["WHOLE","FUSION","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["WHOLE","FORAMINOTOMY","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["WHOLE","DISCECTOMY","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["WHOLE","DISC REPLACEMENT","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["WHOLE","DECOMPRESSION","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["WHOLE","DBS","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["WHOLE","CRANIOTOMY","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["WHOLE","ADR","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["WHOLE","ACDF","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["WHOLE","TUMOUR","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["WHOLE","TUMOR","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["WHOLE","SOFT TISSUE MASS","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["WHOLE","SARCOMA","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["WHOLE","RESECTION","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["WHOLE","REMISSION","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["WHOLE","PROLACTIN","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["WHOLE","POST RESECTION","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["WHOLE","POST DEBULKING","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["WHOLE","ONCOLOGY","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["WHOLE","NEUROFIBROMATOSIS","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["WHOLE","NEOPLASM","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["WHOLE","MORTON","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["WHOLE","METASTATIC","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["WHOLE","METASTASIS","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["WHOLE","METASTASES","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["WHOLE","MENINGIOMA","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["WHOLE","MELANOMA","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["WHOLE","MASS","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["WHOLE","MALIGNANCY","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["WHOLE","LYMPHOMA","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["WHOLE","LIPOMA","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["WHOLE","LEUKEMIA","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["WHOLE","GLIOMA","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["WHOLE","DERMOID","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["WHOLE","CYSTIC LESION","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["WHOLE","CHEMOTHERAPY","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["WHOLE","CARCINOMA","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["WHOLE","CANCER","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["WHOLE","BIOPSY","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["WHOLE","ARACHNOID","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["WHOLE","WHITE MATTER","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["WHOLE","UPPER MOTOR","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["WHOLE","UNSTEADY GAIT","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["WHOLE","TREMOR","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["WHOLE","SMALL VESSEL ISCHAEMIC","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["WHOLE","SMALL VESSEL ISCHAEMIA","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["WHOLE","SMALL VESSEL DISEASE","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["WHOLE","SCLEROSIS","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["WHOLE","PLAQUES","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["WHOLE","PARKINSON","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["WHOLE","NEURODEGENERATIVE","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["WHOLE","MYELIN","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["WHOLE","MULTIPLE SCLEROSIS","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["WHOLE","MS","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["WHOLE","MEMORY LOSS","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["WHOLE","MEMORY DIFFICULTIES","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["WHOLE","MEMORY","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["WHOLE","MAGNIMS","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["WHOLE","LOBE ATROPHY","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["WHOLE","LEUKODYSTROPHIES","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["WHOLE","LEUKOARAIOSIS","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["WHOLE","ISCHEMIC","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["WHOLE","ISCHEMIA","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["WHOLE","HYPERTENSION","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["WHOLE","HYPERINTENSITY","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["WHOLE","HYPERINTENSITIES","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["WHOLE","FORGETFULNESS","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["WHOLE","FACIAL PAIN","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["WHOLE","DYSPHASIA","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["WHOLE","DEMYELINATION","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["WHOLE","DEMYELINATING","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["WHOLE","DEMENTIA","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["WHOLE","CONFUSION","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["WHOLE","COGNITIVE","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["WHOLE","COGNITION","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["WHOLE","CEREBROVASCULAR","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["WHOLE","BRADYKINESIA","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["WHOLE","ATAXIA","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["WHOLE","ARM NEEDLES","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["WHOLE","ALZHEIMER","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["WHOLE","ULNAR SYMPTOMS","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["WHOLE","TINGLING","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["WHOLE","SENSORY","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["WHOLE","SCIATICA","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["WHOLE","REDUCED SENSATION","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["WHOLE","PINS AND NEEDLES","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["WHOLE","PARESTHESIA","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["WHOLE","PARASTHESIA","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["WHOLE","PARALYSIS","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["WHOLE","PARAESTHESIA","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["WHOLE","NUMBNESS","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["WHOLE","NEEDLES","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["WHOLE","HYPOESTHESIA","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["WHOLE","HYPERSENSITIVITY","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["WHOLE","HYPERALGESIA","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["WHOLE","DYSSYNERGIA","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["WHOLE","DYSESTHESIA","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["WHOLE","DYSAESTHESIA","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["WHOLE","CLAUDICATION","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["WHOLE","BURNING SENSATION","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["WHOLE","BURNING","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["WHOLE","BRACHIALGIA","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["WHOLE","ANESTHESIA","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["WHOLE","ALTERED SENSATION","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["WHOLE","ALLODYNIA","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["COMPLETE","REDUCED REFLEX","583","0449","62300481","62310481","rgb(255,255,255)"],
    ["COMPLETE","FOOT DROP","583","0449","62300481","62310481","rgb(255,255,255)"],
    ["COMPLETE","LOSS OF JERK","583","0449","62300481","62310481","rgb(255,255,255)"],
    ["COMPLETE","MUSCLE WASTING","584","0450","62300491","62310491","rgb(255,255,255)"],
    ["COMPLETE","WEAKNESS","584","0450","62300531","62310531","rgb(255,255,255)"],
    ["COMPLETE","REDUCED POWER","584","0450","62300531","62310531","rgb(255,255,255)"],
    ["COMPLETE","DECREASED POWER","584","0450","62300531","62310531","rgb(255,255,255)"],
    ["COMPLETE","LOSS OF POWER","584","0450","62300531","62310531","rgb(255,255,255)"],
    ["COMPLETE","CHIARI","593","0456","62300441","62310441","rgb(255,255,255)"],
    ["COMPLETE","SYRINX","594","0457","62300451","62310451","rgb(255,255,255)"],
    ["COMPLETE","MYELOPATHY","595","0458","62300461","62310461","rgb(255,255,255)"],
    ["COMPLETE","PREGNANCY","598","0461","62300561","62310561","rgb(255,255,255)"],
    ["COMPLETE","PROXIMAL LEG","585","0219","62300501","62310501","rgb(255,255,255)"],
    ["COMPLETE","SCOLIOSIS","1071","0","0","0","rgb(255,255,255)"],
    ["COMPLETE","TRAUMA","597","0460","62300551","62310551","rgb(224, 64, 251)"],
    ["COMPLETE","SPRAIN","597","0460","62300551","62310551","rgb(224, 64, 251)"],
    ["COMPLETE","RTA","597","0460","62300551","62310551","rgb(224, 64, 251)"],
    ["COMPLETE","ROAD TRAFFIC ACCIDENT","597","0460","62300551","62310551","rgb(224, 64, 251)"],
    ["COMPLETE","POST TRAUMATIC","597","0460","62300551","62310551","rgb(224, 64, 251)"],
    ["COMPLETE","POST TRAUMA","597","0460","62300551","62310551","rgb(224, 64, 251)"],
    ["COMPLETE","INJURY","597","0460","62300551","62310551","rgb(224, 64, 251)"],
    ["COMPLETE","FALL","597","0460","62300551","62310551","rgb(224, 64, 251)"],
    ["COMPLETE","CONCUSSIVE HYPOXIA","597","0460","62300551","62310551","rgb(224, 64, 251)"],
    ["COMPLETE","ACCIDENT","597","0460","62300551","62310551","rgb(224, 64, 251)"],
    ["COMPLETE","VERTEBROPLASTY","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["COMPLETE","VENTRICULOSTOMY","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["COMPLETE","SURGICAL","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["COMPLETE","SURGERY","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["COMPLETE","SPINAL FUSION","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["COMPLETE","SHUNT INSERTION","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["COMPLETE","RADIOSURGERY","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["COMPLETE","POSTOPERATIVE","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["COMPLETE","MYOMECTOMY","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["COMPLETE","MICRODISKECTOMY","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["COMPLETE","LAMINECTOMY","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["COMPLETE","KYPHOPLASTY","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["COMPLETE","HEMISPHERECTOMY","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["COMPLETE","FUSION","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["COMPLETE","FORAMINOTOMY","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["COMPLETE","DISCECTOMY","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["COMPLETE","DISC REPLACEMENT","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["COMPLETE","DECOMPRESSION","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["COMPLETE","DBS","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["COMPLETE","CRANIOTOMY","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["COMPLETE","ADR","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["COMPLETE","ACDF","596","0459","62300541","62310541","rgb(255, 255, 0)"],
    ["COMPLETE","TUMOUR","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["COMPLETE","TUMOR","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["COMPLETE","SOFT TISSUE MASS","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["COMPLETE","SARCOMA","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["COMPLETE","RESECTION","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["COMPLETE","REMISSION","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["COMPLETE","PROLACTIN","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["COMPLETE","POST RESECTION","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["COMPLETE","POST DEBULKING","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["COMPLETE","ONCOLOGY","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["COMPLETE","NEUROFIBROMATOSIS","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["COMPLETE","NEOPLASM","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["COMPLETE","MORTON","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["COMPLETE","METASTATIC","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["COMPLETE","METASTASIS","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["COMPLETE","METASTASES","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["COMPLETE","MENINGIOMA","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["COMPLETE","MELANOMA","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["COMPLETE","MASS","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["COMPLETE","MALIGNANCY","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["COMPLETE","LYMPHOMA","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["COMPLETE","LIPOMA","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["COMPLETE","LEUKEMIA","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["COMPLETE","GLIOMA","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["COMPLETE","DERMOID","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["COMPLETE","CYSTIC LESION","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["COMPLETE","CHEMOTHERAPY","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["COMPLETE","CARCINOMA","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["COMPLETE","CANCER","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["COMPLETE","BIOPSY","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["COMPLETE","ARACHNOID","589","0452","62300401","62310401","rgb(61, 90, 254)"],
    ["COMPLETE","WHITE MATTER","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["COMPLETE","UPPER MOTOR","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["COMPLETE","UNSTEADY GAIT","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["COMPLETE","TREMOR","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["COMPLETE","SMALL VESSEL ISCHAEMIC","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["COMPLETE","SMALL VESSEL ISCHAEMIA","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["COMPLETE","SMALL VESSEL DISEASE","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["COMPLETE","SCLEROSIS","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["COMPLETE","PLAQUES","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["COMPLETE","PARKINSON","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["COMPLETE","NEURODEGENERATIVE","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["COMPLETE","MYELIN","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["COMPLETE","MULTIPLE SCLEROSIS","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["COMPLETE","MS","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["COMPLETE","MEMORY LOSS","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["COMPLETE","MEMORY DIFFICULTIES","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["COMPLETE","MEMORY","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["COMPLETE","MAGNIMS","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["COMPLETE","LOBE ATROPHY","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["COMPLETE","LEUKODYSTROPHIES","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["COMPLETE","LEUKOARAIOSIS","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["COMPLETE","ISCHEMIC","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["COMPLETE","ISCHEMIA","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["COMPLETE","HYPERTENSION","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["COMPLETE","HYPERINTENSITY","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["COMPLETE","HYPERINTENSITIES","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["COMPLETE","FORGETFULNESS","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["COMPLETE","FACIAL PAIN","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["COMPLETE","DYSPHASIA","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["COMPLETE","DEMYELINATION","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["COMPLETE","DEMYELINATING","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["COMPLETE","DEMENTIA","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["COMPLETE","CONFUSION","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["COMPLETE","COGNITIVE","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["COMPLETE","COGNITION","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["COMPLETE","CEREBROVASCULAR","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["COMPLETE","BRADYKINESIA","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["COMPLETE","ATAXIA","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["COMPLETE","ARM NEEDLES","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["COMPLETE","ALZHEIMER","591","0454","62300421","62310421","rgb(105, 240, 174)"],
    ["COMPLETE","ULNAR SYMPTOMS","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["COMPLETE","TINGLING","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["COMPLETE","SENSORY","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["COMPLETE","SCIATICA","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["COMPLETE","REDUCED SENSATION","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["COMPLETE","PINS AND NEEDLES","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["COMPLETE","PARESTHESIA","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["COMPLETE","PARASTHESIA","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["COMPLETE","PARALYSIS","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["COMPLETE","PARAESTHESIA","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["COMPLETE","NUMBNESS","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["COMPLETE","NEEDLES","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["COMPLETE","HYPOESTHESIA","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["COMPLETE","HYPERSENSITIVITY","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["COMPLETE","HYPERALGESIA","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["COMPLETE","DYSSYNERGIA","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["COMPLETE","DYSESTHESIA","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["COMPLETE","DYSAESTHESIA","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["COMPLETE","CLAUDICATION","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["COMPLETE","BURNING SENSATION","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["COMPLETE","BURNING","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["COMPLETE","BRACHIALGIA","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["COMPLETE","ANESTHESIA","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["COMPLETE","ALTERED SENSATION","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["COMPLETE","ALLODYNIA","582","0448","62300471","62310471","rgb(170, 0, 255)"],
    ["PELVIS","LIPOMA","117","0140","62301001","62311001","rgb(61, 90, 254)"],
    ["PELVIS","MASS","117","0140","62301001","62311001","rgb(61, 90, 254)"],
    ["PELVIS","CYST","117","0140","62301001","62311001","rgb(61, 90, 254)"],
    ["PELVIS","CYSTIC LESION","117","0140","62301001","62311001","rgb(61, 90, 254)"],
    ["PELVIS","TUMOUR","117","0140","62301001","62311001","rgb(61, 90, 254)"],
    ["PELVIS","RESIDUAL","117","0140","62301001","62311001","rgb(61, 90, 254)"],
    ["PELVIS","RESECTION","117","0140","62301001","62311001","rgb(61, 90, 254)"],
    ["PELVIS","OVARIAN LESION","117","0140","62301001","62311001","rgb(61, 90, 254)"],
    ["PELVIS","OVARIAN CYST","117","0140","62301001","62311001","rgb(61, 90, 254)"],
    ["PELVIS","CANCER","117","0140","62301001","62311001","rgb(61, 90, 254)"],
    ["PELVIS","FIBROID","183","0177","62301341","62311341","rgb(170, 0, 255)"],
    ["PELVIS","FIBROIDS","183","0177","62301341","62311341","rgb(170, 0, 255)"],
    ["PELVIS","LEIOMYOMA","183","0177","62301341","62311341","rgb(170, 0, 255)"],
    ["PELVIS","ADENOMYOSIS","183","0177","62301341","62311341","rgb(170, 0, 255)"],
    ["ABDOMEN","RENAL","602","0187","62307161","62317161","rgb(255,255,255)"],
    ["ABDOMEN","KIDNEY","602","0187","62307161","62317161","rgb(255,255,255)"],
    ["ABDOMEN","KIDNEYS","602","0187","62307161","62317161","rgb(255,255,255)"],
    ["ABDOMEN","ADRENAL","601","0186","62307151","62317151","rgb(255,255,255)"],
    ["ABDOMEN","ADRENALS","601","0186","62307151","62317151","rgb(255,255,255)"],
    ["ABDOMEN","LIVER LESION","158","0175","62301311","62311311","rgb(255,255,255)"],
    ["ABDOMEN","LIVER LESIONS","158","0175","62301311","62311311","rgb(255,255,255)"],
    ["LIVER","LIVER LESION","158","0175","62301311","62311311","rgb(255,255,255)"],
    ["LIVER","LIVER LESIONS","158","0175","62301311","62311311","rgb(255,255,255)"],
    ["LIVER","CANCER","371","0179","62301321","62311321","rgb(61, 90, 254)"],
    ["LIVER","METASTATIC","371","0179","62301321","62311321","rgb(61, 90, 254)"],
    ["LIVER","METASTASIS","371","0179","62301321","62311321","rgb(61, 90, 254)"],
    ["FISTULA","FISTULA","131","0181","0","0","rgb(255,255,255)"],
    ["ENTEROGRAPHY","INTESTINAL POUCH","555","0228","62307191","62317191","rgb(255,255,255)"],
    ["ENTEROGRAPHY","KNOWN CROHN","555","0228","62307191","62317191","rgb(255,255,255)"],
    ["ENTEROGRAPHY","KNOWN CROHNS","555","0228","62307191","62317191","rgb(255,255,255)"],
    ["ENTEROGRAPHY","HISTORY OF CROHN","555","0228","62307191","62317191","rgb(255,255,255)"],
    ["ENTEROGRAPHY","HISTORY OF CROHNS","555","0228","62307191","62317191","rgb(255,255,255)"],
    ["ENTEROGRAPHY","DIAGNOSIS OF CROHN","555","0228","62307191","62317191","rgb(255,255,255)"],
    ["ENTEROGRAPHY","DISGNOSIS OF CROHNS","555","0228","62307191","62317191","rgb(255,255,255)"],
    ["SMALL BOWEL","INTESTINAL POUCH","555","0228","62307191","62317191","rgb(255,255,255)"],
    ["SMALL BOWEL","KNOWN CROHN","555","0228","62307191","62317191","rgb(255,255,255)"],
    ["SMALL BOWEL","KNOWN CROHNS","555","0228","62307191","62317191","rgb(255,255,255)"],
    ["SMALL BOWEL","HISTORY OF CROHN","555","0228","62307191","62317191","rgb(255,255,255)"],
    ["SMALL BOWEL","HISTORY OF CROHNS","555","0228","62307191","62317191","rgb(255,255,255)"],
    ["SMALL BOWEL","DIAGNOSIS OF CROHN","555","0228","62307191","62317191","rgb(255,255,255)"],
    ["SMALL BOWEL","DISGNOSIS OF CROHNS","555","0228","62307191","62317191","rgb(255,255,255)"],
    ["KNEE","TRAUMA","773","0480","0","0","rgb(224, 64, 251)"],
    ["KNEE","RTA","773","0480","0","0","rgb(224, 64, 251)"],
    ["KNEE","ROAD TRAFFIC ACCIDENT","773","0480","0","0","rgb(224, 64, 251)"],
    ["KNEE","POST TRAUMATIC","773","0480","0","0","rgb(224, 64, 251)"],
    ["KNEE","POST TRAUMA","773","0480","0","0","rgb(224, 64, 251)"],
    ["KNEE","INJURY","773","0480","0","0","rgb(224, 64, 251)"],
    ["KNEE","FALL","773","0480","0","0","rgb(224, 64, 251)"],
    ["KNEE","DISLOCATION","773","0480","0","0","rgb(224, 64, 251)"],
    ["KNEE","HYPEREXTENSION","773","0480","0","0","rgb(224, 64, 251)"],
    ["KNEE","MENISCAL TEAR","775","0","0","0","rgb(255,255,255)"],
    ["KNEE","MENISCAL TEARS","775","0","0","0","rgb(255,255,255)"],
    ["KNEE","MENISCUS TEAR","775","0","0","0","rgb(255,255,255)"],
    ["KNEE","MENISCUS TEARS","775","0","0","0","rgb(255,255,255)"],
    ["KNEE","TEAR OF MENISCAL","775","0","0","0","rgb(255,255,255)"],
    ["KNEE","TEAR OF MENISCUS","775","0","0","0","rgb(255,255,255)"],
    ["KNEE","TEAR OF THE MEDIAL MENISCUS","775","0","0","0","rgb(255,255,255)"],
    ["KNEE","TEAR OF THE BODY","775","0","0","0","rgb(255,255,255)"],
    ["KNEE","TEAR IN THE BODY","775","0","0","0","rgb(255,255,255)"],
    ["KNEE","TORN OF MENISCAL","775","0","0","0","rgb(255,255,255)"],
    ["KNEE","TORN OF MENISCUS","775","0","0","0","rgb(255,255,255)"],
    ["KNEE","TORN OF THE MEDIAL MENISCUS","775","0","0","0","rgb(255,255,255)"],
    ["KNEE","TORN OF THE BODY","775","0","0","0","rgb(255,255,255)"],
    ["KNEE","TORN IN THE BODY","775","0","0","0","rgb(255,255,255)"],
    ["KNEE","LOCKING","774","0481","0","0","rgb(255,255,255)"],
    ["KNEE","OSTEOMYELITIS","779","0482","0","0","rgb(255,255,255)"],
    ["KNEE","SARCOMA","779","0485","0","0","rgb(255,255,255)"],
    ["KNEE","ACL TEAR","776","0","0","0","rgb(255,255,255)"],
    ["KNEE","TEAR OF ACL","776","0","0","0","rgb(255,255,255)"],
    ["KNEE","PCL TEAR","776","0","0","0","rgb(255,255,255)"],
    ["KNEE","TEAR OF PCL","776","0","0","0","rgb(255,255,255)"],
    ["KNEE","MCL TEAR","778","0","0","0","rgb(255,255,255)"],
    ["KNEE","TEAR OF MCL","778","0","0","0","rgb(255,255,255)"],
    ["FOOT","MORTON","1036","0195","62307061","62317061","rgb(61, 90, 254)"],
    ["FOOT","NEUROMA","1036","0195","62307061","62317061","rgb(61, 90, 254)"],
    ["FOOT","GANGLION","1036","0195","62307061","62317061","rgb(61, 90, 254)"],
    ["SOFT TISSUE","LIPOMA","117","0140","62301001","62311001","rgb(61, 90, 254)"],
    ["SOFT TISSUE","MASS","117","0140","62301001","62311001","rgb(61, 90, 254)"],
    ["SOFT TISSUE","TUMOUR","117","0140","62301001","62311001","rgb(61, 90, 254)"],
    ["SOFT TISSUE","RESIDUAL","117","0140","62301001","62311001","rgb(61, 90, 254)"],
    ["SOFT TISSUE","RESECTION","117","0140","62301001","62311001","rgb(61, 90, 254)"],
    ["SOFT TISSUE","LESION","117","0140","62301001","62311001","rgb(61, 90, 254)"],
    ["SOFT TISSUE","CANCER","117","0140","62301001","62311001","rgb(61, 90, 254)"]
];

const DEFAULT_CODES = [
    ["BRAIN","94","0099","62300041","62310041"],
    ["CERV","519","0470","62300411","62310411"],
    ["CSPINE","519","0470","62300411","62310411"],
    ["THORAC","529","0439","62300411","62310411"],
    ["LUMB","541","0425","62300411","62310411"],
    ["WHOLE","590","0453","62300411","62310411"],
    ["COMPLETE","590","0453","62300411","62310411"],
    ["PELVIS","118","0141","62301011","62311011"],
    ["GROIN","118","0141","62301011","62311011"],
    ["NECK","118","0141","62301011","62311011"],
    ["SOFT TISSUE","118","0141","62301011","62311011"],
    ["TMJ","118","0141","62301011","62311011"],
    ["CALF","118","0141","62301011","62311011"],
    ["LOWER LEG","118","0141","62301011","62311011"],
    ["THIGH","118","0141","62301011","62311011"],
    ["CHEST WALL","118","0141","62301011","62311011"],
    ["TIBIA AND FIBULA","118","0141","62301011","62311011"],
    ["TIB FIB","118","0141","62301011","62311011"],
    ["BRACHIAL","118","0141","62301011","62311011"],
    ["SCAPULA","118","0141","62301011","62311011"],
    ["THORAX","118","0141","62301011","62311011"],
    ["HUMERUS","118","0141","62301011","62311011"],
    ["FINGER","118","0141","62301011","62311011"],
    ["THUMB","118","0141","62301011","62311011"],
    ["FEMUR","118","0141","62301011","62311011"],
    ["SACRUM COCCYX","118","0141","62301011","62311011"],
    ["CLAVICLE","118","0141","62301011","62311011"],
    ["KNEE","779","0479","62301171","62311171"],
    ["LIVER","158","0175","62301311","62311311"],
    ["FOOT","1037","0562","62307031","62317031"],
    ["HAND BOTH","563","0141","62301011","62311011"],
    ["HAND RT LT","563","0141","62301011","62311011"],
    ["HAND LT RT","563","0141","62301011","62311011"],
    ["HAND RIGHT LEFT","563","0141","62301011","62311011"],
    ["HAND LEFT RIGHT","563","0141","62301011","62311011"],
    ["HAND","436","0141","62301011","62311011"],
    ["ENTEROGRAPHY","744","0229","62307201","62317201"],
    ["SMALL BOWEL","744","0229","62307201","62317201"]
];

const COLORS = {
    SIMPLE: 'rgb(0, 176, 80)',
    ACUTE: 'rgb(0, 255, 255)',
    DEFAULT: 'rgb(255, 153, 51)',
    WHITE: 'rgb(255, 255, 255)',
    CONTRAST: 'rgb(61, 90, 254)'
};

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// DATA FROM PENDING CLAIMS
const POSITION_PRIMARY      = [];
const POSITION_SECONDARY    = [];
const INVOICE               = [];
const DURATION              = [];
const DURATION_TYPE         = [];
const REPORT_PRIMARY        = [];
const REPORT_SECONDARY      = [];
const PROCEDURE_PRIMARY     = [];
const PROCEDURE_SECONDARY   = [];

// DATA TO PENDING CLAIMS
const SYMPTOMS_FINAL        = [];
const SYMPTOMS_PRIMARY      = [];
const SYMPTOMS_SECONDARY    = [];
const DIAGNOSIS_FINAL       = [];
const DIAGNOSIS_PRIMARY     = [];
const DIAGNOSIS_SECONDARY   = [];
const CODE_PRIMARY          = [];
const CODE_SECONDARY        = [];
const COLOR_PRIMARY         = [];
const COLOR_SECONDARY       = [];
const CONTRAST_PRIMARY      = [];
const CONTRAST_SECONDARY    = [];

// PENDING CLAIMS
const PENDING_CLAIMS = document.getElementsByTagName("tr");

// LOAD DATA FROM PENDING CLAIMS
for (let index = 3; index < PENDING_CLAIMS.length; index++) {
    if (PENDING_CLAIMS[index].cells.length == 12) {
        const [
            positionPrimary,
            positionSecondary,
            invoice,
            duration,
            durationType,
            reportPrimary,
            reportSecondary,
            procedurePrimary,
            procedureSecondary
        ] = [
            index,
            null,
            PENDING_CLAIMS[index].cells[0].innerText,
            PENDING_CLAIMS[index].cells[2].children[0].value,
            PENDING_CLAIMS[index].cells[3].children[0].value,
            PENDING_CLAIMS[index].cells[4].textContent,
            null,
            PENDING_CLAIMS[index].cells[10].children[0].value,
            null
        ];
          
        POSITION_PRIMARY.push(positionPrimary);
        POSITION_SECONDARY.push(positionSecondary);
        INVOICE.push(invoice);
        DURATION.push(duration);
        DURATION_TYPE.push(durationType);
        REPORT_PRIMARY.push(reportPrimary);
        REPORT_SECONDARY.push(reportSecondary);
        PROCEDURE_PRIMARY.push(procedurePrimary);
        PROCEDURE_SECONDARY.push(procedureSecondary);

        const [
            symptomsFinal,
            symptomsPrimary,
            symptomsSecondary,
            diagnosisFinal,
            diagnosisPrimary,
            diagnosisSecondary,
            codePrimary,
            codeSecondary,
            colorPrimary,
            colorSecondary,
            contrastPrimary,
            contrastSecondary,
        ] = [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            COLORS.WHITE,
            COLORS.WHITE,
            null,
            null
        ];

        SYMPTOMS_FINAL.push(symptomsFinal);
        SYMPTOMS_PRIMARY.push(symptomsPrimary);
        SYMPTOMS_SECONDARY.push(symptomsSecondary);
        DIAGNOSIS_FINAL.push(diagnosisFinal);
        DIAGNOSIS_PRIMARY.push(diagnosisPrimary);
        DIAGNOSIS_SECONDARY.push(diagnosisSecondary);
        CODE_PRIMARY.push(codePrimary);
        CODE_SECONDARY.push(codeSecondary);
        COLOR_PRIMARY.push(colorPrimary);
        COLOR_SECONDARY.push(colorSecondary);
        CONTRAST_PRIMARY.push(contrastPrimary);
        CONTRAST_SECONDARY.push(contrastSecondary);      
    }
    if (PENDING_CLAIMS[index - 1].cells.length == 12 && PENDING_CLAIMS[index].cells.length == 3) {
        const [
            positionSecondary,
            reportSecondary,
            procedureSecondary
        ] = [
            index,
            PENDING_CLAIMS[index].cells[0].textContent,
            PENDING_CLAIMS[index].cells[1].children[0].value
        ];

        POSITION_SECONDARY[POSITION_SECONDARY.length - 1] = positionSecondary;
        REPORT_SECONDARY[REPORT_SECONDARY.length - 1] = reportSecondary;
        PROCEDURE_SECONDARY[PROCEDURE_SECONDARY.length - 1] = procedureSecondary;
    }
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function checkContrast() {
    for (let index = 0; index < PROCEDURE_PRIMARY.length; index++) {
        CONTRAST_PRIMARY[index] = PROCEDURE_PRIMARY[index]?.toUpperCase().includes("CONTRAST") || PROCEDURE_PRIMARY[index]?.toUpperCase().includes("ORAL") || PROCEDURE_PRIMARY[index]?.toUpperCase().includes("+C") || PROCEDURE_PRIMARY[index]?.toUpperCase().includes("GADOLINIUM");
    }

    for (let index = 0; index < PROCEDURE_SECONDARY.length; index++) {
        CONTRAST_SECONDARY[index] = PROCEDURE_SECONDARY[index]?.toUpperCase().includes("CONTRAST") || PROCEDURE_SECONDARY[index]?.toUpperCase().includes("ORAL") || PROCEDURE_SECONDARY[index]?.toUpperCase().includes("+C") || PROCEDURE_SECONDARY[index]?.toUpperCase().includes("GADOLINIUM");

    }
}

function fixData() {
    for (let index = 0; index < REPORT_PRIMARY.length; index++) {
        REPORT_PRIMARY[index] = REPORT_PRIMARY[index]?.replace(/(\r\n|\n|\r)/gm, ' ').replace(/\s+/g, ' ').trim();
        PROCEDURE_PRIMARY[index] = PROCEDURE_PRIMARY[index]?.replace(/[^a-zA-Z0-9\-]/g, ' ').replace(/\s+/g, ' ').trim();
        REPORT_SECONDARY[index] = REPORT_SECONDARY[index]?.replace(/(\r\n|\n|\r)/gm, ' ').replace(/\s+/g, ' ').trim();
        PROCEDURE_SECONDARY[index] = PROCEDURE_SECONDARY[index]?.replace(/[^a-zA-Z0-9\-]/g, ' ').replace(/\s+/g, ' ').trim();
    }
}

function swapReport() {
    for (let index = 0; index < REPORT_PRIMARY.length; index++) {
        if (REPORT_SECONDARY[index] && PROCEDURE_PRIMARY[index].includes("-") && PROCEDURE_SECONDARY[index].includes("-")) {
            const procedurePrimary = PROCEDURE_PRIMARY[index].split("-").pop();
            const procedureSecondary = PROCEDURE_SECONDARY[index].split("-").pop();
            
            if (REPORT_PRIMARY[index].includes(procedureSecondary) && REPORT_SECONDARY[index].includes(procedurePrimary)) {
                [REPORT_PRIMARY[index], REPORT_SECONDARY[index]] = [REPORT_SECONDARY[index], REPORT_PRIMARY[index]];
            }
        }
    }
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// PREPARE SYMPTOMS
function prepareSymptoms(MODE) {
    const REPORT = MODE == 1 ? REPORT_PRIMARY : REPORT_SECONDARY;
    const SYMPTOMS = MODE == 1 ? SYMPTOMS_PRIMARY : SYMPTOMS_SECONDARY;
    ADD_NEXT_SYMPTOM:
    for (let index = 0; index < REPORT.length; index++) {
        const report = REPORT[index];
        if (report) {
            for (let symptomStart of SYMPTOMS_START) {
                for (let symptomEnd of SYMPTOMS_END) {
                    if (report.includes(symptomStart) && report.includes(symptomEnd)) {
                        let s = report.split(symptomStart).pop().split(symptomEnd)[0].trim();
                        if (!s.endsWith(".")) {
                            s += ".";
                        }
                        for (let symptomEnd of SYMPTOMS_END) {
                            if (s.includes(symptomEnd)) {
                                s = s.replace(s.slice(s.indexOf(symptomEnd)).trim(), "");
                            }
                        }
                        SYMPTOMS[index] = s;
                        continue ADD_NEXT_SYMPTOM;
                    }
                }
            }
        }
        if (MODE == 1) {
            SYMPTOMS_PRIMARY[index] = "N/S";
        } else if (PROCEDURE_SECONDARY[index]) {
            SYMPTOMS_SECONDARY[index] = "N/S";
        }
    }
}

function fixNoSymptoms(MODE) {
    const SYMPTOMS = MODE == 1 ? SYMPTOMS_PRIMARY : SYMPTOMS_SECONDARY;
    const PROCEDURE = MODE == 1 ? PROCEDURE_PRIMARY : PROCEDURE_SECONDARY;
    ADD_NEXT_FIX_NO_SYMPTOMS:
    for (let index = 0; index < SYMPTOMS.length; index++) {
        const symptoms = SYMPTOMS[index];
        const procedure = PROCEDURE[index];
        if (procedure && symptoms == "N/S") {
            for (let genericSymptom of GENERIC_SYMPTOMS) {
                if (procedure.toUpperCase().includes(genericSymptom[0])) {
                    if (MODE == 1) {
                        SYMPTOMS_PRIMARY[index] = genericSymptom[1];
                    } else {
                        SYMPTOMS_SECONDARY[index] = genericSymptom[1];
                    }
                    continue ADD_NEXT_FIX_NO_SYMPTOMS;
                }
            }
        }
    }
}

function replaceSymptomsBlacklist(MODE) {
    const SYMPTOMS = MODE == 1 ? SYMPTOMS_PRIMARY : SYMPTOMS_SECONDARY;
    const PROCEDURE = MODE == 1 ? PROCEDURE_PRIMARY : PROCEDURE_SECONDARY;
    const REPORT = MODE == 1 ? REPORT_PRIMARY : REPORT_SECONDARY;
    ADD_NEXT_SYMPTOMS_REPLACE:
    for (let index = 0; index < SYMPTOMS.length; index++) {
        const symptoms = SYMPTOMS[index];
        const procedure = PROCEDURE[index];
        const report = REPORT[index];
        if (symptoms && procedure) {
            for (let blacklist of BLACKLIST_REPLACE_SYMPTOMS_OR_DIAGNOSIS) {
                if (symptoms.toUpperCase() === blacklist || (symptoms.includes(":") && !PROCEDURE_PRIMARY[index].includes("PET"))) {
                    for (let genericSymptom of GENERIC_SYMPTOMS) {
                        if (procedure.toUpperCase().includes(genericSymptom[0])) {
                            SYMPTOMS[index] = genericSymptom[1];
                            continue ADD_NEXT_SYMPTOMS_REPLACE;
                        }
                    }
                }
            }
        }
        if (report?.includes("Lucey") && procedure) {
            for (let genericSymptom of GENERIC_SYMPTOMS) {
                if (procedure.toUpperCase().includes(genericSymptom[0])) {
                    SYMPTOMS[index] = genericSymptom[1];
                    continue ADD_NEXT_SYMPTOMS_REPLACE;
                }
            }
        }
    }
}

function removeSymptomsBlacklist(MODE) {
    const SYMPTOMS = MODE == 1 ? SYMPTOMS_PRIMARY : SYMPTOMS_SECONDARY;
    for (let index = 0; index < SYMPTOMS.length; index++) {
        if (SYMPTOMS[index]) {
            for (let blacklist of BLACKLIST_REMOVE_FROM_TEXT) {
                SYMPTOMS[index] = SYMPTOMS[index].replace(new RegExp(blacklist, 'g'), "");
            }
        }
    }
}

function fixSymptoms(MODE) {
    fixNoSymptoms(MODE);
    replaceSymptomsBlacklist(MODE);
    removeSymptomsBlacklist(MODE);
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// PREPARE DIAGNOSIS
function prepareDiagnosis(MODE) {
    const DIAGNOSIS = MODE == 1 ? DIAGNOSIS_PRIMARY : DIAGNOSIS_SECONDARY;
    const REPORT = MODE == 1 ? REPORT_PRIMARY : REPORT_SECONDARY;
    const PROCEDURE = MODE == 1 ? PROCEDURE_PRIMARY : PROCEDURE_SECONDARY;
    ADD_NEXT_DIAGNOSIS:
    for (let index = 0; index < REPORT.length; index++) {
        const report = REPORT[index];
        if (report) {
            for (let diagnosisStart of DIAGNOSIS_START) {
                for (let diagnosisEnd of DIAGNOSIS_END) {
                    if (report.includes(diagnosisStart) && report.includes(diagnosisEnd)) {
                        let d = report.split(diagnosisStart).pop().split(diagnosisEnd)[0].trim();
                        if (!d.endsWith(".")) {
                            d += ".";
                        }
                        DIAGNOSIS[index] = d;
                        continue ADD_NEXT_DIAGNOSIS;
                    }
                }
            }

            if (ALLIANCE_AFFIDEA_RADIOLOGY == 2 || ALLIANCE_AFFIDEA_RADIOLOGY == 3) {
                for (let diagnosisStart of DIAGNOSIS_START) {
                    if (report.includes(diagnosisStart)) {
                        let d = report.split(diagnosisStart).pop().trim();
                        if (!d.endsWith(".")) {
                            d += ".";
                        }
                        DIAGNOSIS[index] = d;
                        continue ADD_NEXT_DIAGNOSIS;
                    }
                }
            }
            
            if (MODE == 1) {
                DIAGNOSIS[index] = "N/D";
            } else if (PROCEDURE[index]) {
                DIAGNOSIS[index] = "N/D";
            }
        }
    }
}

function fixNoDiagnosis(MODE) {
    const DIAGNOSIS = MODE == 1 ? DIAGNOSIS_PRIMARY : DIAGNOSIS_SECONDARY;
    const REPORT = MODE == 1 ? REPORT_PRIMARY : REPORT_SECONDARY;
    ADD_NEXT_FIX_NO_DIAGNOSIS:
    for (let index = 0; index < DIAGNOSIS.length; index++) {
        const diagnosis = DIAGNOSIS[index];
        const report = REPORT[index];
        if (diagnosis == "N/D" && report) {
            for (let symptomEnd of SYMPTOMS_END) {
                for (let diagnosisStart of DIAGNOSIS_START) {
                    if (report.includes(symptomEnd) && report.includes(diagnosisStart)) {
                        let d = report.split(symptomEnd).pop().split(diagnosisStart)[0].trim().split(/\.\s+/);
                        for (let i = 0; i < d.length; i++) {
                            for (let blacklist of BLACKLIST_REMOVE_SENTENCES) {
                                if (d[i].includes(blacklist)) {
                                    d.splice(i, 1);
                                    i--;
                                    break;
                                }
                            }
                        }
                        d = d.slice(0, 3).join(". ");
                        if (!d.endsWith(".")) {
                            d += ".";
                        }
                        DIAGNOSIS[index] = d;
                        continue ADD_NEXT_FIX_NO_DIAGNOSIS;
                    }
                }
            }

            if (ALLIANCE_AFFIDEA_RADIOLOGY == 2 || ALLIANCE_AFFIDEA_RADIOLOGY == 3) {
                let d = report.trim().split(/\.\s+/);
                for (let i = 0; i < d.length; i++) {
                    for (let blacklist of BLACKLIST_REMOVE_SENTENCES) {
                        if (d[i].includes(blacklist)) {
                            d.splice(i, 1);
                            i--;
                            break;
                        }
                    }
                }
                d = d.slice(0, 3).join(". ");
                if (!d.endsWith(".")) {
                    d += ".";
                }
                DIAGNOSIS[index] = d;
                continue ADD_NEXT_FIX_NO_DIAGNOSIS;
            }
        }
    }
}

function replaceDiagnosisBlacklist(MODE) {
    const DIAGNOSIS = MODE == 1 ? DIAGNOSIS_PRIMARY : DIAGNOSIS_SECONDARY;
    const REPORT = MODE == 1 ? REPORT_PRIMARY : REPORT_SECONDARY;
    ADD_NEXT_DIAGNOSIS_REPLACE:
    for (let index = 0; index < DIAGNOSIS.length; index++) {
        const diagnosis = DIAGNOSIS[index];
        const report = REPORT[index];
        if (diagnosis && report) {
            for (let blacklist of BLACKLIST_REPLACE_SYMPTOMS_OR_DIAGNOSIS) {
                if (diagnosis.toUpperCase() === blacklist) {
                    for (let symptomEnd of SYMPTOMS_END) {
                        for (let diagnosisStart of DIAGNOSIS_START) {
                            if (report.includes(symptomEnd) && report.includes(diagnosisStart)) {
                                let d = report.split(symptomEnd).pop().split(diagnosisStart)[0].trim().split(/\.\s+/);
                                for (let i = 0; i < d.length; i++) {
                                    for (let blacklist of BLACKLIST_REMOVE_SENTENCES) {
                                        if (d[i].includes(blacklist)) {
                                            d.splice(i, 1);
                                            i--;
                                            break;
                                        }
                                    }
                                }
                                d = d.slice(0, 3).join(". ");
                                if (!d.endsWith(".")) {
                                    d += ".";
                                }
                                DIAGNOSIS[index] = d;
                                continue ADD_NEXT_DIAGNOSIS_REPLACE;
                            }
                        }
                    }
                }
            }
        }
    }
}

function removeDiagnosisBlacklist(MODE) {
    const DIAGNOSIS = MODE == 1 ? DIAGNOSIS_PRIMARY : DIAGNOSIS_SECONDARY;
    for (let index = 0; index < DIAGNOSIS.length; index++) {
        if (DIAGNOSIS[index]) {
            for (let blacklist of BLACKLIST_REMOVE_FROM_TEXT) {
                DIAGNOSIS[index] = DIAGNOSIS[index].replace(new RegExp(blacklist, 'g'), "");
            }
        }   
    }
}

function advancedDiagnosisTextFormat(MODE) {
    const DIAGNOSIS = MODE == 1 ? DIAGNOSIS_PRIMARY : DIAGNOSIS_SECONDARY;
    for (let index = 0; index < DIAGNOSIS.length; index++) {
        if (DIAGNOSIS[index]) {
            DIAGNOSIS[index] = DIAGNOSIS[index]
            .replace(/\([^()]*\)/g, "")
            .replace(/\s+/g, " ")
            .replace(/�/g, "'")
            .replace(/•/g, "")
            .replace(/\s+/g, " ")
            .replace(/\s*([,.;:\-?])/g, '$1')
            .replace(/\*/g, "")
            .replace(/([a-zA-Z])\.([a-zA-Z])/g, '$1. $2')
            .replace(/([Tt]here\s+(is|are)(\s+an\s+|\s+a\s+)?)/gi, '')
            .replace(/\s+/g, " ")
            .trim()
            .replace(/(^|[.]\s+)([a-z])/g, (match, p1, p2) => {
                return p1 + p2.toUpperCase();
            })
            .replace(/(Within these limitations, )/g, "")
            .replace(/(^|[.]\s+)([a-z])/g, (match, p1, p2) => {
                return p1 + p2.toUpperCase();
            });
        }
    }
}

function fixDiagnosis(MODE) {
    fixNoDiagnosis(MODE);
    replaceDiagnosisBlacklist(MODE);
    removeDiagnosisBlacklist(MODE);
    advancedDiagnosisTextFormat(MODE);
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// ADD CODE
function addCode(MODE) {
    const [PROCEDURE, DIAGNOSIS, SYMPTOMS, REPORT, CODE, COLOR, CONTRAST] = MODE == 1
    ? [PROCEDURE_PRIMARY, DIAGNOSIS_PRIMARY, SYMPTOMS_PRIMARY, REPORT_PRIMARY, CODE_PRIMARY, COLOR_PRIMARY, CONTRAST_PRIMARY]
    : [PROCEDURE_SECONDARY, DIAGNOSIS_SECONDARY, SYMPTOMS_SECONDARY, REPORT_SECONDARY, CODE_SECONDARY, COLOR_SECONDARY, CONTRAST_SECONDARY];

    ADD_NEXT_CODE:
    for (let index = 0; index < PROCEDURE.length; index++) {
        const [
            procedure,
            diagnosis,
            symptoms,
            report
         ] = [
            PROCEDURE[index],
            DIAGNOSIS[index],
            SYMPTOMS[index],
            REPORT[index]
         ];

        if (diagnosis && symptoms && report && (procedure?.toUpperCase().includes("MRI") || procedure?.toUpperCase().includes("MRA") || procedure?.toUpperCase().includes("MRCP"))) {
            // VHI
            if (INSURER_SELECTED == 1) {
                // SIMPLE VHI
                for (let simpleCode of SIMPLE_CODES) {
                    if (procedure.toUpperCase().includes(simpleCode[0]) && simpleCode[1] != "0") {
                        CODE[index] = simpleCode[1];
                        COLOR[index] = COLORS.SIMPLE;
                        continue ADD_NEXT_CODE;
                    }
                }

                // SYMPTOMS COMPLEX VHI - arrayName[rowIndex][columnIndex] - ['BRAIN','X','1111','2222']
                let checkSymptoms = " " + symptoms.replace(/\W/g, " ").replace(/\s+/g, " ").toUpperCase().trim() + " ";
                for (let complexCode of COMPLEX_CODES) {
                    if (procedure.toUpperCase().includes(complexCode[0])) {
                        if (checkSymptoms.includes(" " + complexCode[1] + " ") && complexCode[2] != "0") {
                            CODE[index] = complexCode[2];
                            COLOR[index] = complexCode[6];
                            continue ADD_NEXT_CODE;
                        }
                    }
                }

                // DIAGNOSIS COMPLEX VHI - arrayName[rowIndex][columnIndex] - ['BRAIN','X','1111','2222']
                let checkDiagnosis = " " + diagnosis.replace(/\W/g, " ").replace(/\s+/g, " ").toUpperCase().trim() + " ";
                for (let complexCode of COMPLEX_CODES) {
                    if (procedure.toUpperCase().includes(complexCode[0])) {
                        if (checkDiagnosis.includes(" " + complexCode[1] + " ") && complexCode[2] != "0") {
                            CODE[index] = complexCode[2];
                            COLOR[index] = complexCode[6];
                            continue ADD_NEXT_CODE;
                        }
                    }
                }

                // ACUTE SPINE VHI
                if ((DURATION_TYPE[index] == 'MONTH' && DURATION[index] < 2) ||
                    (DURATION_TYPE[index] == 'WEEK' && DURATION[index] < 7) ||
                    (DURATION_TYPE[index] == 'DAY' && DURATION[index] < 49)) {

                    if (procedure.toUpperCase().includes('CERV')) {
                        CODE[index] = '521';
                        COLOR[index] = COLORS.ACUTE;
                        continue ADD_NEXT_CODE;
                    } else if (procedure.toUpperCase().includes('THORAC')) {
                        CODE[index] = '531';
                        COLOR[index] = COLORS.ACUTE;
                        continue ADD_NEXT_CODE;
                    } else if (procedure.toUpperCase().includes('LUMB')) {
                        CODE[index] = '543';
                        COLOR[index] = COLORS.ACUTE;
                        continue ADD_NEXT_CODE;
                    } else if (procedure.toUpperCase().includes('WHOLE SPINE') ||
                        procedure.toUpperCase().includes('SPINE WHOLE') ||
                        procedure.toUpperCase().includes('COMPLETE')) {
                        CODE[index] = '592';
                        COLOR[index] = COLORS.ACUTE;
                        continue ADD_NEXT_CODE;
                    }
                }

                // DEFAULT VHI
                for (let defaultCode of DEFAULT_CODES) {
                    if (procedure.toUpperCase().includes(defaultCode[0]) && defaultCode[1] != "0") {
                        CODE[index] = defaultCode[1];
                        COLOR[index] = COLORS.DEFAULT;
                        continue ADD_NEXT_CODE;
                    }
                }
            }

            // LAYA
            if (INSURER_SELECTED == 2) {
                // SIMPLE LAYA
                for (let simpleCode of SIMPLE_CODES) {
                    if (procedure.toUpperCase().includes(simpleCode[0]) && simpleCode[2] != "0") {
                        CODE[index] = simpleCode[2];
                        COLOR[index] = COLORS.SIMPLE;
                        continue ADD_NEXT_CODE;
                    }
                }

                // SYMPTOMS COMPLEX LAYA - arrayName[rowIndex][columnIndex] - ['BRAIN','X','1111','2222']
                let checkSymptoms = " " + SYMPTOMS[index].replace(/\W/g, " ").replace(/\s+/g, " ").toUpperCase().trim() + " ";
                for (let complexCode of COMPLEX_CODES) {
                    if (procedure.toUpperCase().includes(complexCode[0])) {
                        if (checkSymptoms.includes(" " + complexCode[1] + " ") && complexCode[3] != "0") {
                            CODE[index] = complexCode[3];
                            COLOR[index] = complexCode[6];
                            continue ADD_NEXT_CODE;
                        }
                    }
                }

                // DIAGNOSIS COMPLEX LAYA - arrayName[rowIndex][columnIndex] - ['BRAIN','X','1111','2222']
                let checkDiagnosis = " " + DIAGNOSIS[index].replace(/\W/g, " ").replace(/\s+/g, " ").toUpperCase().trim() + " ";
                for (let complexCode of COMPLEX_CODES) {
                    if (procedure.toUpperCase().includes(complexCode[0])) {
                        if (checkDiagnosis.includes(" " + complexCode[1] + " ") && complexCode[3] != "0") {
                            CODE[index] = complexCode[3];
                            COLOR[index] = complexCode[6];
                            continue ADD_NEXT_CODE;
                        }
                    }
                }

                // ACUTE SPINE LAYA
                if ((DURATION_TYPE[index] == 'MONTH' && DURATION[index] < 2) ||
                    (DURATION_TYPE[index] == 'WEEK' && DURATION[index] < 7) ||
                    (DURATION_TYPE[index] == 'DAY' && DURATION[index] < 49)) {

                    if (procedure.toUpperCase().includes('CERV')) {
                        CODE[index] = '0472';
                        COLOR[index] = COLORS.ACUTE;
                        continue ADD_NEXT_CODE;
                    } else if (procedure.toUpperCase().includes('THORAC')) {
                        CODE[index] = '0441';
                        COLOR[index] = COLORS.ACUTE;
                        continue ADD_NEXT_CODE;
                    } else if (procedure.toUpperCase().includes('LUMB')) {
                        CODE[index] = '0427';
                        COLOR[index] = COLORS.ACUTE;
                        continue ADD_NEXT_CODE;
                    } else if (procedure.toUpperCase().includes('WHOLE SPINE') ||
                        procedure.toUpperCase().includes('SPINE WHOLE') ||
                        procedure.toUpperCase().includes('COMPLETE')) {
                        CODE[index] = '0455';
                        COLOR[index] = COLORS.ACUTE;
                        continue ADD_NEXT_CODE;
                    }
                }

                // DEFAULT LAYA
                for (let defaultCode of DEFAULT_CODES) {
                    if (procedure.toUpperCase().includes(defaultCode[0]) && defaultCode[2] != "0") {
                        CODE[index] = defaultCode[2];
                        COLOR[index] = COLORS.DEFAULT;
                        continue ADD_NEXT_CODE;
                    }
                }
            }

            // ILH
            if (INSURER_SELECTED == 3) {
                // SIMPLE ILH
                for (let simpleCode of SIMPLE_CODES) {
                    if (procedure.toUpperCase().includes(simpleCode[0])) {
                        if (ALLIANCE_AFFIDEA_RADIOLOGY != 3) {
                            continue ADD_NEXT_CODE;
                        } else {
                            if (procedure.toUpperCase().includes(simpleCode[0]) && simpleCode[3] != "0") {
                                CODE[index] = CONTRAST[index] == false ? simpleCode[3] : simpleCode[4];
                                COLOR[index] = COLORS.SIMPLE;
                                continue ADD_NEXT_CODE;
                            }
                        }
                    }
                }

                // SYMPTOMS COMPLEX ILH - arrayName[rowIndex][columnIndex] - ['BRAIN','X','1111']
                let checkSymptoms = " " + symptoms.replace(/\W/g, " ").replace(/\s+/g, " ").toUpperCase().trim() + " ";
                for (let complexCode of COMPLEX_CODES) {
                    if (procedure.toUpperCase().includes(complexCode[0])) {
                        if (checkSymptoms.includes(" " + complexCode[1] + " ") && complexCode[4] != "0") {
                            CODE[index] = CONTRAST[index] == false ? complexCode[4] : complexCode[5];
                            COLOR[index] = complexCode[6];
                            continue ADD_NEXT_CODE;
                        }
                    }
                }

                // DIAGNOSIS COMPLEX ILH - arrayName[rowIndex][columnIndex] - ['BRAIN','X','1111']
                let checkDiagnosis = " " + DIAGNOSIS[index].replace(/\W/g, " ").replace(/\s+/g, " ").toUpperCase().trim() + " ";
                for (let complexCode of COMPLEX_CODES) {
                    if (procedure.toUpperCase().includes(complexCode[0])) {
                        if (checkDiagnosis.includes(" " + complexCode[1] + " ") && complexCode[4] != "0") {
                            CODE[index] = CONTRAST[index] == false ? complexCode[4] : complexCode[5];
                            COLOR[index] = complexCode[6];
                            continue ADD_NEXT_CODE;
                        }
                    }
                }

                // ACUTE SPINE IRISHLIFE
                if ((DURATION_TYPE[index] == 'WEEK' && DURATION[index] < 4) || 
                    (DURATION_TYPE[index] == 'DAY' && DURATION[index] < 28)) {

                    if (procedure.toUpperCase().includes('CERV') || 
                        procedure.toUpperCase().includes('THORAC') || 
                        procedure.toUpperCase().includes('LUMB') || 
                        procedure.toUpperCase().includes('WHOLE') || 
                        procedure.toUpperCase().includes('COMPLETE')) {
                        CODE[index] = CONTRAST[index] == false ? '62300431' : '62310431';
                        COLOR[index] = COLORS.ACUTE;
                        continue ADD_NEXT_CODE;
                    }
                }

                // DEFAULT ILH
                for (let defaultCode of DEFAULT_CODES) {
                    if (ALLIANCE_AFFIDEA_RADIOLOGY == 3 && procedure.toUpperCase().includes(defaultCode[0]) && defaultCode[3] != "0") {
                        CODE[index] = CONTRAST[index] == false ? defaultCode[3] : defaultCode[4];
                        COLOR[index] = COLORS.DEFAULT;
                        continue ADD_NEXT_CODE;
                    }
                }
            }
        }
    }
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function removeUnnecessarySentences(SD) {
    let SD_SPLIT_DOT = SD.split(". ");
    let SD_TO_RETURN = [];
    for (let S of SD_SPLIT_DOT) {
        const SD_SPLIT_COMMA = S.split(", ");
        SD_TO_RETURN.push(SD_SPLIT_COMMA);
    }
    for (let i = 0; i < SD_TO_RETURN.length; i++) {
        for (let blacklist of BLACKLIST_REMOVE_SENTENCES) {
            SD_TO_RETURN[i] = SD_TO_RETURN[i].filter(s => !s.includes(blacklist));
        }
    }
    for (let i = 0; i < SD_TO_RETURN.length; i++) {
        SD_TO_RETURN[i] = SD_TO_RETURN[i].join(", ");
    }
    SD_TO_RETURN = SD_TO_RETURN.filter(s => s !== "").join(". ");
    if (!SD_TO_RETURN.endsWith(".")) {
        SD_TO_RETURN += ".";
    }
    return SD_TO_RETURN;
}

function lastTextCorrection() {
    for (let index = 0; index < SYMPTOMS_PRIMARY.length; index++) {
        SYMPTOMS_PRIMARY[index] = SYMPTOMS_PRIMARY[index] ? removeUnnecessarySentences(SYMPTOMS_PRIMARY[index]) : null;
        SYMPTOMS_SECONDARY[index] = SYMPTOMS_SECONDARY[index] ? removeUnnecessarySentences(SYMPTOMS_SECONDARY[index]) : null;
        DIAGNOSIS_PRIMARY[index] = DIAGNOSIS_PRIMARY[index] ? removeUnnecessarySentences(DIAGNOSIS_PRIMARY[index]) : null;
        DIAGNOSIS_SECONDARY[index] = DIAGNOSIS_SECONDARY[index] ? removeUnnecessarySentences(DIAGNOSIS_SECONDARY[index]) : null;
    }   
}

function combineGenericSymptoms() {
    for (let index = 0; index < SYMPTOMS_PRIMARY.length; index++) {
        if (SYMPTOMS_PRIMARY[index] !== SYMPTOMS_SECONDARY[index] && SYMPTOMS_PRIMARY[index]?.endsWith("pain.") && SYMPTOMS_SECONDARY[index]?.endsWith("pain.")) {
            SYMPTOMS_PRIMARY[index] = SYMPTOMS_PRIMARY[index].replace("pain.", "and");
            SYMPTOMS_SECONDARY[index] = SYMPTOMS_SECONDARY[index].charAt(0).toLowerCase() + SYMPTOMS_SECONDARY[index].slice(1);
        }
    }
}

function prepareText() {
    for (let index = 0; index < SYMPTOMS_PRIMARY.length; index++) {
        if (SYMPTOMS_SECONDARY[index] && (SYMPTOMS_PRIMARY[index] != SYMPTOMS_SECONDARY[index])) {
            SYMPTOMS_FINAL[index] = SYMPTOMS_PRIMARY[index] + " " + SYMPTOMS_SECONDARY[index];
        } else {
            SYMPTOMS_FINAL[index] = SYMPTOMS_PRIMARY[index];
        }

        if (DIAGNOSIS_SECONDARY[index] && (DIAGNOSIS_PRIMARY[index] != DIAGNOSIS_SECONDARY[index])) {
            DIAGNOSIS_FINAL[index] = DIAGNOSIS_PRIMARY[index] + "?" + DIAGNOSIS_SECONDARY[index];
        } else {
            DIAGNOSIS_FINAL[index] = DIAGNOSIS_PRIMARY[index];
        }
    }
}

function fixAffideaLAYA() {
    for (let index = 0; index < PROCEDURE_PRIMARY.length; index++) {
        if (PROCEDURE_PRIMARY[index]?.toUpperCase().includes("MRA")) {
            if (PROCEDURE_SECONDARY[index]?.toUpperCase().includes("HEAD") || PROCEDURE_SECONDARY[index]?.toUpperCase().includes("BRAIN")) {
                CODE_PRIMARY[index] = "0418";
                CODE_SECONDARY[index] = "0115";
            }
        }
        if (PROCEDURE_SECONDARY[index]?.toUpperCase().includes("MRA")) {
            if (PROCEDURE_PRIMARY[index]?.toUpperCase().includes("HEAD") || PROCEDURE_PRIMARY[index]?.toUpperCase().includes("BRAIN")) {
                CODE_SECONDARY[index] = "0418";
                CODE_PRIMARY[index] = "0115";
            }
        }
    }
}

function fixRadiologyLAYA() {
    for (let index = 0; index < PROCEDURE_PRIMARY.length; index++) {
        if (PROCEDURE_PRIMARY[index]?.toUpperCase().includes("BOTH") ||
        PROCEDURE_PRIMARY[index]?.toUpperCase().includes("COMPLETE") ||
        PROCEDURE_PRIMARY[index]?.toUpperCase().includes("RT LT") ||
        PROCEDURE_PRIMARY[index]?.toUpperCase().includes("LT RT")) {
            CODE_PRIMARY[index] = CODE_PRIMARY[index] == '0479' ? "0487" : CODE_PRIMARY[index]
            CODE_PRIMARY[index] = CODE_PRIMARY[index] == '0480' ? "0488" : CODE_PRIMARY[index]
            CODE_PRIMARY[index] = CODE_PRIMARY[index] == '0481' ? "0489" : CODE_PRIMARY[index]

            CODE_PRIMARY[index] = CODE_PRIMARY[index] == '0562' ? "0462" : CODE_PRIMARY[index]
            CODE_PRIMARY[index] = CODE_PRIMARY[index] == '0195' ? "0212" : CODE_PRIMARY[index]

            CODE_PRIMARY[index] = CODE_PRIMARY[index] == '0210' ? "0216" : CODE_PRIMARY[index]
        }
    }
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var ALLIANCE_AFFIDEA_RADIOLOGY;
do {
    ALLIANCE_AFFIDEA_RADIOLOGY = prompt("SELECT MODE:\n1 - ALLIANCE\n2 - AFFIDEA\n3 - RADIOLOGY");
} while (ALLIANCE_AFFIDEA_RADIOLOGY == null || !['1', '2', '3'].includes(ALLIANCE_AFFIDEA_RADIOLOGY));

var INSURER_SELECTED;
do {
    INSURER_SELECTED = prompt("SELECT INSURER:\n1 - VHI\n2 - LAYA\n3 - IRISHLIFE");
} while (INSURER_SELECTED == null || !['1', '2', '3'].includes(INSURER_SELECTED));

checkContrast();
fixData();
swapReport();

prepareSymptoms(1);
fixSymptoms(1);

prepareSymptoms(2);
fixSymptoms(2);

prepareDiagnosis(1);
fixDiagnosis(1);

prepareDiagnosis(2);
fixDiagnosis(2);

addCode(1);
addCode(2);

lastTextCorrection();
combineGenericSymptoms();
prepareText();

if (ALLIANCE_AFFIDEA_RADIOLOGY == 2 && INSURER_SELECTED == 2) {
    fixAffideaLAYA();
}

if (ALLIANCE_AFFIDEA_RADIOLOGY == 3 && INSURER_SELECTED == 2) {
    fixRadiologyLAYA();
}

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function addTextToHTML() {
    for (let index = 0; index < SYMPTOMS_FINAL.length; index++) {
        let r, c, rc, code;

        if (SYMPTOMS_FINAL[index]) {
            r = document.getElementsByTagName("tr")[POSITION_PRIMARY[index]];

            // SYMPTOMS
            c = r.getElementsByTagName('td')[5];
            rc = c.getElementsByTagName('textarea')[0];
            rc.value = SYMPTOMS_FINAL[index] ? SYMPTOMS_FINAL[index] + "#" : "#";

            // DIAGNOSIS
            c = r.getElementsByTagName('td')[6];
            rc = c.getElementsByTagName('textarea')[0];
            rc.value = DIAGNOSIS_FINAL[index] ? DIAGNOSIS_FINAL[index] + "#" : "#";

            // CONTRAST PRIMARY
            c = r.getElementsByTagName('td')[10];
            rc = c.getElementsByTagName('input')[0];
            if (CONTRAST_PRIMARY[index]) {
                rc.style.backgroundColor = COLORS.CONTRAST;
                rc.style.fontWeight = 'bold';
            }

            // CODES PRIMARY
            c = r.getElementsByTagName('td')[11];
            rc = c.getElementsByTagName('input')[0];
            if (CODE_PRIMARY[index]) {
                if (INSURER_SELECTED == 3 && ALLIANCE_AFFIDEA_RADIOLOGY != 3) {
                    code = CODE_PRIMARY[index];
                } else {
                    code = CODE_PRIMARY[index] + "#";
                }
                rc.value = code;
                rc.style.backgroundColor = COLOR_PRIMARY[index];
                rc.style.fontWeight = 'bold';
            }
        }

        if (CODE_SECONDARY[index]) {
            r = document.getElementsByTagName("tr")[POSITION_SECONDARY[index]];

            // CONTRAST SECONDARY
            c = r.getElementsByTagName('td')[1];
            rc = c.getElementsByTagName('input')[0];
            if (CONTRAST_SECONDARY[index]) {
                rc.style.backgroundColor = COLORS.CONTRAST;
                rc.style.fontWeight = 'bold';
            }

            // CODES SECONDARY
            c = r.getElementsByTagName('td')[2];
            rc = c.getElementsByTagName('input')[0];
            if (CODE_SECONDARY[index]) {
                if (INSURER_SELECTED == 3 && ALLIANCE_AFFIDEA_RADIOLOGY != 3) {
                    code = CODE_SECONDARY[index];
                } else {
                    code = CODE_SECONDARY[index] + "#";
                }
                rc.value = code;
                rc.style.backgroundColor = COLOR_SECONDARY[index];
                rc.style.fontWeight = 'bold';
            }
        }
    }
}

addTextToHTML();