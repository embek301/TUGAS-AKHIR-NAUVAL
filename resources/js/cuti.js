function redirectToSelectedPage() {
      var selectedValue = document.getElementById("jenisCuti").value;
      if (selectedValue) {
        window.location.href = selectedValue;
      }
    }
   var startDateInput = document.getElementById('tgl_awal');
var endDateInput = document.getElementById('tgl_akhir');
var jumlahInput = document.getElementById('jumlah');
var startDateError = document.getElementById('tgl_awal_error');
var endDateError = document.getElementById('tgl_akhir_error');
var inputTanggal = document.getElementById('tanggal_pengajuan');

// Buat objek Date untuk mendapatkan tanggal hari ini
var today = new Date();

// Format tanggal sesuai dengan format yang diterima oleh input type date (YYYY-MM-DD)
var formattedDate = today.toISOString().substr(0, 10);

// Set nilai input tanggal
inputTanggal.value = formattedDate;

// Mendengarkan perubahan pada input tanggal
startDateInput.addEventListener('input', calculateDuration);
endDateInput.addEventListener('input', calculateDuration);

function calculateDuration() {
    var startDate = new Date(startDateInput.value);
    var endDate = new Date(endDateInput.value);
    var submissionDate = new Date(inputTanggal.value);
    var minStartDate = new Date(submissionDate);
    minStartDate.setDate(submissionDate.getDate() + 14);

    if (startDate < minStartDate) {
        startDateError.textContent = 'Tanggal awal harus lebih besar atau sama dengan 14 hari dari tanggal pengajuan';
        jumlahInput.value = ''; // Menghapus nilai jika tanggal tidak valid
    } else {
        startDateError.textContent = '';
        if (!isNaN(startDate.getTime()) && !isNaN(endDate.getTime()) && endDate >= startDate) {
            // Menghitung durasi dalam hari
            var timeDifference = endDate - startDate;
            var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)) + 1;

            // Memperbarui nilai input "Jumlah sakit" dan pesan kesalahan
            jumlahInput.value = daysDifference + ' hari';
            endDateError.textContent = '';
        } else {
            jumlahInput.value = ''; // Menghapus nilai jika tanggal tidak valid
            endDateError.textContent =
                'Tanggal akhir harus lebih besar atau sama dengan tanggal awal';
        }
    }
}
