console.log('Cphorm dynamic form JS loaded');

const FIELD_DEFS = {
  full_name: { label: "Full Name", placeholder: "Enter full name" },
  age: { label: "Age", placeholder: "Enter age", type: "number" },
  presenting_complaint: { label: "Presenting Complaint", placeholder: "Describe complaint" },
  medical_history: { label: "Medical History", placeholder: "Enter medical history" },
  medications: { label: "Medications", placeholder: "Enter medications" },
  diagnosis: {
    label: "Diagnosis",
    type: "select",
    options: ['Cholera', 'Malaria(CL)', 'Malaria(VL)', 'Dengue Fever', 'Measles', 'Leishmaniasis']
  },
  city: {
    label: "City",
    type: "select",
    options: [
      "Khartoum", "Port Sudan", "Kassala", "Nyala", "El Obeid",
      "Dongola", "Kadugli", "Wad Madani", "Geneina", "Sennar"
    ]
  },
  sex: {
    label: "Sex",
    type: "select",
    options: ["male", "female"]
  },
  date_of_birth: {
    label: "Date of Birth",
    type: "date",
    placeholder: "Select date of birth"
  },
};

const selectorsContainer = document.getElementById('field-selectors');
const form = document.getElementById('dynamic-form');
const dynamicFields = document.getElementById('dynamic-fields');

if (!selectorsContainer || !form || !dynamicFields) {
  console.error('Required DOM elements not found.');
  return;
}

selectorsContainer.addEventListener('change', () => {
  const selectedKeys = Array.from(selectorsContainer.querySelectorAll('input[type="checkbox"]:checked'))
    .map(cb => cb.dataset.key);

  dynamicFields.innerHTML = '';

  selectedKeys.forEach(key => {
    const field = FIELD_DEFS[key];
    if (!field) return;
    const wrapper = document.createElement('label');
    wrapper.className = "flex flex-col min-w-40 flex-1";
    let inputHTML = "";

    if (field.type === "select") {
      inputHTML = `<select name="${key}" class="form-select rounded-lg border border-[#cedbe8] bg-slate-50 h-14 p-[15px] text-base font-normal leading-normal">
        <option value="">Select ${field.label}</option>
        ${field.options.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
      </select>`;
    } else if (field.type === "date") {
      inputHTML = `<input type="date" name="${key}" class="form-input rounded-lg border border-[#cedbe8] bg-slate-50 h-14 p-[15px] text-base font-normal leading-normal" placeholder="${field.placeholder || ''}" />`;
    } else {
      inputHTML = `<input name="${key}" type="${field.type || 'text'}" placeholder="${field.placeholder || ''}" class="form-input rounded-lg border border-[#cedbe8] bg-slate-50 h-14 p-[15px] text-base font-normal leading-normal" />`;
    }

    wrapper.innerHTML = `<p class="text-[#0d141c] text-base font-medium leading-normal pb-2">${field.label}</p>${inputHTML}`;
    dynamicFields.appendChild(wrapper);
  });
});