import pytest
import pandas as pd
import numpy as np

# Import from a Python module, not a notebook
from platform.analytics.src.data_generation import generate_sample

def test_generate_sample_keys():
    sample = generate_sample()
    expected_keys = {
        "ID", "full_name", "lat", "long", "date_of_birth", "age", "sex",
        "occupation", "marital_status", "address", "contact_information",
        "presenting_complaint", "complaint_duration", "sugar level", "fever",
        "weight", "hight", "temperture", "heart rate", "final_diagnosis",
        "malaria_type", "visit_date"
    }
    assert set(sample.keys()) == expected_keys

def test_malaria_type_logic():
    for diag, expected in [("Malaria(CL)", "CL"), ("Malaria(VL)", "VL"), ("Cholera", None)]:
        # Patch the random.choice to return the diagnosis we want to test
        sample = generate_sample()
        sample["final_diagnosis"] = diag
        if diag == "Malaria(CL)":
            assert sample["malaria_type"] == "CL"
        elif diag == "Malaria(VL)":
            assert sample["malaria_type"] == "VL"
        else:
            assert sample["malaria_type"] is None

def test_visit_date_range():
    sample = generate_sample()
    visit_date = pd.to_datetime(sample["visit_date"])

    assert pd.Timestamp("1994-01-01") <= visit_date <= pd.Timestamp("2025-12-31")