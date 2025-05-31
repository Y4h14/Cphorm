console.log('Cphorm dynamic form JS loaded');

const FIELD_DEFS = {
  full_name: { label: "Full Name", placeholder: "Enter full name" },
  age: { label: "Age", placeholder: "Enter age", type: "number" },
  presenting_complaint: { label: "Presenting Complaint", placeholder: "Describe complaint" },
  medical_history: { label: "Medical History", placeholder: "Enter medical history" },
  medications: { label: "Medications", placeholder: "Enter medications" },
  diagnosis: { label: "Diagnosis", placeholder: "Enter diagnosis" }
};

const selectorsContainer = document.getElementById('field-selectors');
const form = document.getElementById('dynamic-form');
const dynamicFields = document.getElementById('dynamic-fields');

selectorsContainer.addEventListener('change', () => {
  // Get all checked checkboxes
  const selectedKeys = Array.from(selectorsContainer.querySelectorAll('input[type="checkbox"]:checked'))
    .map(cb => cb.dataset.key);

  // Clear only the dynamic fields
  dynamicFields.innerHTML = '';

  // Add input for each selected field
  selectedKeys.forEach(key => {
    const field = FIELD_DEFS[key];
    if (!field) return;
    const wrapper = document.createElement('label');
    wrapper.className = "flex flex-col min-w-40 flex-1";
    wrapper.innerHTML = `
      <p class="text-[#0d141c] text-base font-medium leading-normal pb-2">${field.label}</p>
      <input
        name="${key}"
        type="${field.type || 'text'}"
        placeholder="${field.placeholder}"
        class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d141c] focus:outline-0 focus:ring-0 border border-[#cedbe8] bg-slate-50 focus:border-[#cedbe8] h-14 placeholder:text-[#49739c] p-[15px] text-base font-normal leading-normal"
      />
    `;
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