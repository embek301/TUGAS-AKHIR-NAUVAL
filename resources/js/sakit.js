 var startDateInput = document.getElementById("tgl_awal");
          var endDateInput = document.getElementById("tgl_akhir");
          var jumlahInput = document.getElementById("jumlah");
          var endDateError = document.getElementById("tgl_akhir_error");

          startDateInput.addEventListener("input", calculateDuration);
          endDateInput.addEventListener("input", calculateDuration);

          function calculateDuration() {
            var startDate = new Date(startDateInput.value);
            var endDate = new Date(endDateInput.value);

            if (
              !isNaN(startDate.getTime()) &&
              !isNaN(endDate.getTime()) &&
              endDate >= startDate
            ) {
              var timeDifference = endDate - startDate;
              var daysDifference =
                Math.floor(timeDifference / (1000 * 60 * 60 * 24)) + 1;

              jumlahInput.value = daysDifference + " hari";
              endDateError.textContent = "";
            } else {
              jumlahInput.value = "";
              endDateError.textContent =
                "Tanggal akhir harus lebih besar atau sama dengan tanggal awal";
            }
          }