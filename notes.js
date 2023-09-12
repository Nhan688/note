document.addEventListener("DOMContentLoaded", function () {
    const noteTextarea = document.getElementById("note-text");
    const projectSelect = document.getElementById("project-select");
    const dateInput = document.getElementById("date-input");
    const exportButton = document.getElementById("export-button");

    exportButton.addEventListener("click", function () {
        const note = noteTextarea.value;
        const project = projectSelect.value; // Lấy giá trị từ select
        const date = dateInput.value;

        // Tạo đối tượng chứa dữ liệu
        const data = {
            note: note,
            project: project,
            date: date,
        };

        // Chuyển đổi dữ liệu thành chuỗi JSON và chuyển đến trang chính
        const jsonData = JSON.stringify(data);
        localStorage.setItem("exportedData", jsonData);
        window.location.href = "index.html";
    });
});
