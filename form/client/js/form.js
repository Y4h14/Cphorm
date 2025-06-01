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

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const notification = document.getElementById('notification');
  notification.textContent = "Form submitted successfully!";
  notification.classList.remove('hidden');
  // Hide after 2 seconds
  setTimeout(() => {
    notification.classList.add('hidden');
    form.reset();
    // Optionally, also uncheck all checkboxes and clear form preview
    selectorsContainer.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    dynamicFields.innerHTML = '';
  }, 2000);
});

const customFieldForm = document.getElementById('custom-field-form');
const customFieldName = document.getElementById('custom-field-name');
const customFieldType = document.getElementById('custom-field-type');
const customFieldOptions = document.getElementById('custom-field-options');

// Show options input only if "select" is chosen
customFieldType.addEventListener('change', () => {
  if (customFieldType.value === 'select') {
    customFieldOptions.classList.remove('hidden');
    customFieldOptions.required = true;
  } else {
    customFieldOptions.classList.add('hidden');
    customFieldOptions.required = false;
  }
});

customFieldForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const key = customFieldName.value.trim().toLowerCase().replace(/\s+/g, '_');
  const label = customFieldName.value.trim();
  const type = customFieldType.value;
  let fieldDef = { label, type };

  if (type === 'select') {
    const options = customFieldOptions.value.split(',').map(opt => opt.trim()).filter(Boolean);
    if (options.length === 0) {
      alert('Please provide at least one option for the select field.');
      return;
    }
    fieldDef.options = options;
  } else if (type === 'text' || type === 'number' || type === 'date') {
    fieldDef.placeholder = `Enter ${label.toLowerCase()}`;
  }

  // Add to FIELD_DEFS
  FIELD_DEFS[key] = fieldDef;

  // Add a new checkbox to selectors
  const labelElem = document.createElement('label');
  labelElem.className = "flex gap-x-3 py-3 flex-row";
  labelElem.innerHTML = `
    <input type="checkbox" data-key="${key}" class="h-5 w-5 rounded border-[#cedbe8] border-2 bg-transparent text-[#0c7ff2] checked:bg-[#0c7ff2] checked:border-[#0c7ff2] focus:ring-0 focus:ring-offset-0 focus:border-[#cedbe8] focus:outline-none" />
    <p class="text-[#0d141c] text-base font-normal leading-normal">${label}</p>
  `;
  selectorsContainer.appendChild(labelElem);

  // Reset form
  customFieldForm.reset();
  customFieldOptions.classList.add('hidden');
});