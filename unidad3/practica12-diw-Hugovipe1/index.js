/**
 * @author Hugo Vicente Peligro
 */
document.addEventListener('DOMContentLoaded', function () {
  $(function () {

    $('input[name="datefilter"]').daterangepicker({
      autoUpdateInput: false,
      locale: {
        cancelLabel: 'Clear'
      },
    });

    $('input[name="datefilter"]').on('apply.daterangepicker', function (ev, picker) {
      $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
    });

    $('input[name="datefilter"]').on('cancel.daterangepicker', function (ev, picker) {
      $(this).val('');
    });

  });

  $(function () {

    $('input[name="datefilter2"]').daterangepicker({
      autoUpdateInput: false,
      locale: {
        cancelLabel: 'Clear'
      },
      drops: "up"
    });

    $('input[name="datefilter2"]').on('apply.daterangepicker', function (ev, picker) {
      $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
    });

    $('input[name="datefilter2"]').on('cancel.daterangepicker', function (ev, picker) {
      $(this).val('');
    });

  });
});