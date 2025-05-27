# Form


## Frontend

the expected request from the frontend is like :

```json
{
  "ID":"str",
  "full_name": "string",
  "date_of_birth": "string",
  "age": "integer",
  "gender": "string",
  "occupation": "string",
  "marital_status": "string",
  "address": "string",
  "contact_information": "string",

  "presenting_complaint": "string",
  "complaint_duration": "string",

  "hpc_onset": "string",
  "hpc_duration": "string",
  "hpc_progression": "string",
  "hpc_severity": "string",
  "hpc_associated_symptoms": "array",
  "hpc_aggravating_factors": "string",
  "hpc_relieving_factors": "string",
  "hpc_previous_episodes": "boolean",
  "hpc_treatments_tried": "array",

  "chronic_illnesses": "array",
  "previous_surgeries": "array",
  "hospitalizations": "array",
  "childhood_illnesses": "array",
  "allergies": "array",

  "current_medications": "array",
  "otc_medications": "array",
  "herbal_medicines": "array",
  "adverse_reactions": "array",

  "hereditary_conditions": "array",
  "similar_family_symptoms": "boolean",
  "early_deaths_in_family": "boolean",

  "smoking_status": "string",
  "alcohol_use": "string",
  "substance_use": "string",
  "living_conditions": "string",
  "social_support": "string",
  "travel_history": "string",
  "diet": "string",
  "physical_activity": "string",

  "menarche_age": "integer",
  "menopause_age": "integer",
  "cycle_regular": "boolean",
  "pregnancies": "integer",
  "deliveries": "integer",
  "abortions": "integer",
  "obstetric_complications": "string",
  "contraceptive_use": "string",

  "sexual_partners_count": "integer",
  "sexual_partners_gender": "string",
  "protection_use": "boolean",
  "history_of_stis": "boolean",
  "safeguarding_concerns": "boolean",

  "fever": "boolean",
  "weight_change": "string",
  "fatigue": "boolean",
  "night_sweats": "boolean",
  "appetite_change": "boolean",

  "chest_pain": "boolean",
  "palpitations": "boolean",
  "dyspnea": "boolean",
  "orthopnea": "boolean",
  "pnd": "boolean",
  "edema": "boolean",

  "cough": "boolean",
  "hemoptysis": "boolean",
  "wheezing": "boolean",
  "shortness_of_breath": "boolean",
  "pleuritic_pain": "boolean",

  "nausea": "boolean",
  "vomiting": "boolean",
  "abdominal_pain": "boolean",
  "diarrhea": "boolean",
  "constipation": "boolean",
  "jaundice": "boolean",
  "bloating": "boolean",
  "bowel_changes": "boolean",
  "blood_in_stool": "boolean",

  "dysuria": "boolean",
  "frequency": "boolean",
  "urgency": "boolean",
  "hematuria": "boolean",
  "nocturia": "boolean",
  "incontinence": "boolean",
  "genital_discharge": "boolean",

  "headache": "boolean",
  "seizures": "boolean",
  "dizziness": "boolean",
  "numbness": "boolean",
  "weakness": "boolean",
  "loss_of_consciousness": "boolean",
  "visual_disturbance": "boolean",
  "speech_disturbance": "boolean",

  "joint_pain": "boolean",
  "back_pain": "boolean",
  "muscle_weakness": "boolean",
  "morning_stiffness": "boolean",
  "limited_motion": "boolean",

  "rash": "boolean",
  "itching": "boolean",
  "lesions": "boolean",
  "skin_changes": "boolean",

  "polyuria": "boolean",
  "polydipsia": "boolean",
  "polyphagia": "boolean",
  "temperature_intolerance": "boolean",
  "weight_change_endocrine": "boolean",
  "skin_or_hair_change": "boolean",
  "menstrual_irregularity": "boolean",

  "temperature_c": "float",
  "heart_rate_bpm": "integer",
  "respiratory_rate_bpm": "integer",
  "blood_pressure_systolic": "integer",
  "blood_pressure_diastolic": "integer",
  "mean_arterial_pressure": "float",
  "spo2_percent": "integer",
  "glucose_mg_dl": "float",
  "infusion_drug_name": "string",
  "infusion_rate_ml_hr": "float",
  "infusion_volume_remaining_ml": "float",
  "etco2_mmHg": "float",
  "ventilator_rr": "integer",
  "ventilator_tidal_volume_ml": "float",
  "ventilator_peep_cmH2O": "float",
  "ventilator_fio2_percent": "float",
  "urine_output_ml": "float",
  "urine_color": "string",
  "urine_clarity": "string",
  "body_weight_kg": "float"
}
```


## Backend

the backend must return the following response:



```json
{
  "message":"success",
  "done":["str"]
}
```




