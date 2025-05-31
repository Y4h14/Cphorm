import pandas as pd
import numpy as np
import random
from faker import Faker

fake = Faker()
"""
This code is responsible for generating the sample data used

"""
sudanese_cities = {
    "Khartoum": (15.5007, 32.5599),
    "Port Sudan": (19.6158, 37.2153),
    "Kassala": (15.4594, 36.4036),
    "Nyala": (12.0489, 24.9042),
    "El Obeid": (13.1833, 30.2167),
    "Dongola": (19.1667, 30.45),
    "Kadugli": (11.0167, 29.7167),
    "Wad Madani": (14.4, 33.5167),
    "Geneina": (13.45, 22.4333),
    "Sennar": (13.55, 33.6167)
}

occupations = ['Farmer', 'Teacher', 'Engineer', 'Doctor', 'Nurse', 'Trader', 'Student', 'Unemployed']
marital_statuses = ['Single', 'Married', 'Divorced', 'Widowed']
complaints = ['Fever and chills', 'Severe diarrhea', 'Persistent cough', 'Skin rash', 'Abdominal pain']
diagnoses = ['Cholera', 'Malaria(CL)', 'Malaria(VL)', 'Dengue Fever', 'Measles', 'Leishmaniasis']

def generate_sample():
    city = random.choice(list(sudanese_cities.keys()))
    lat, long = sudanese_cities[city]
    
    age = random.randint(1, 90)
    sex = random.choice(['male', 'female'])
    diagnosis = random.choice(diagnoses)
    
    return {
        "ID": fake.uuid4(),
        "full_name": fake.name(),
        "lat": lat + np.random.normal(0, 0.01),
        "long": long + np.random.normal(0, 0.01),
        "date_of_birth": fake.date_of_birth(minimum_age=1, maximum_age=90).isoformat(),
        "age": age,
        "sex": sex,
        "occupation": random.choice(occupations),
        "marital_status": random.choice(marital_statuses),
        "address": city,
        "contact_information": fake.phone_number(),
        "presenting_complaint": random.choice(complaints),
        "complaint_duration": f"{random.randint(1, 14)} days",
        "sugar level": round(np.random.normal(100, 15), 1),
        "fever": random.choice([True, False]),
        "weight": round(np.random.normal(60, 12), 1),
        "hight": round(np.random.normal(1.65, 0.1), 2),
        "temperture": round(np.random.normal(37, 1), 1),
        "heart rate": round(np.random.normal(80, 10), 1),
        "final_diagnosis": diagnosis
    }

# Generate dataset
data = [generate_sample() for _ in range(10000)]
df = pd.DataFrame(data)

# Save to CSV
file_path = "../data/sudan_patient_dataset.csv"
df.to_csv(file_path, index=False)
file_path
# ...existing code...

def generate_sample():
    city = random.choice(list(sudanese_cities.keys()))
    lat, long = sudanese_cities[city]
    
    age = random.randint(1, 90)
    sex = random.choice(['male', 'female'])
    diagnosis = random.choice(diagnoses)
    
    # Assign malaria_type only if diagnosis is Malaria(CL) or Malaria(VL)
    if diagnosis == 'Malaria(CL)':
        malaria_type = 'CL'
    elif diagnosis == 'Malaria(VL)':
        malaria_type = 'VL'
    else:
        malaria_type = None

    # Generate a random date between 1994-01-01 and 2025-12-31
    start_date = pd.to_datetime('1994-01-01')
    end_date = pd.to_datetime('2025-12-31')
    random_date = fake.date_between_dates(date_start=start_date, date_end=end_date)

    return {
        "ID": fake.uuid4(),
        "full_name": fake.name(),
        "lat": lat + np.random.normal(0, 0.01),
        "long": long + np.random.normal(0, 0.01),
        "date_of_birth": fake.date_of_birth(minimum_age=1, maximum_age=90).isoformat(),
        "age": age,
        "sex": sex,
        "occupation": random.choice(occupations),
        "marital_status": random.choice(marital_statuses),
        "address": city,
        "contact_information": fake.phone_number(),
        "presenting_complaint": random.choice(complaints),
        "complaint_duration": f"{random.randint(1, 14)} days",
        "sugar level": round(np.random.normal(100, 15), 1),
        "fever": random.choice([True, False]),
        "weight": round(np.random.normal(60, 12), 1),
        "hight": round(np.random.normal(1.65, 0.1), 2),
        "temperture": round(np.random.normal(37, 1), 1),
        "heart rate": round(np.random.normal(80, 10), 1),
        "final_diagnosis": diagnosis,
        "malaria_type": malaria_type,
        "visit_date": random_date.isoformat()
    }

# Generate dataset
data = [generate_sample() for _ in range(10000)]
df = pd.DataFrame(data)

# Save to CSV
file_path = "../data/sudan_patient_dataset.csv"
df.to_csv(file_path, index=False)
file_path
# ...existing code...