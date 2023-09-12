// Tạo đối tượng lịch trình
const calendarData = {
    upcomingEvent: "Họp công ty",
    date: "2023-09-20",
    location: "Văn phòng",
};

// Tạo danh sách dự án
const projectsData = [
    { name: "Dự án A", description: "Mô tả dự án A" },
    { name: "Dự án B", description: "Mô tả dự án B" },
    // Thêm dự án khác ở đây
];

// Tạo danh sách chú ý
const notesData = [
    "Chú ý 1: Điều quan trọng 1",
    "Chú ý 2: Điều quan trọng 2",
    // Thêm chú ý khác ở đây
];
// Hiển thị lịch trình lên trang
const calendarContent = document.getElementById("calendar-content");
calendarContent.innerHTML = `
    <p><strong>Sự kiện:</strong> ${calendarData.upcomingEvent}</p>
    <p><strong>Ngày:</strong> ${calendarData.date}</p>
    <p><strong>Địa điểm:</strong> ${calendarData.location}</p>
`;

// Hiển thị danh sách dự án lên trang
const projectsContent = document.getElementById("projects-content");
projectsContent.innerHTML = "<ul>";
projectsData.forEach((project) => {
    projectsContent.innerHTML += `<li><strong>${project.name}:</strong> ${project.description}</li>`;
});
projectsContent.innerHTML += "</ul>";

// Hiển thị danh sách chú ý lên trang
const notesContent = document.getElementById("notes-content");
notesContent.innerHTML = "<ul>";
notesData.forEach((note) => {
    notesContent.innerHTML += `<li>${note}</li>`;
});
notesContent.innerHTML += "</ul>";
