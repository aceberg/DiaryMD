
function ConfigAbout() {
  return (
    <>
      {/* MODAL */}
    <div class="modal fade" id="aboutModal" tabindex="-1" aria-labelledby="aboutModallLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5">About</h1>
            <button type="button" class="btn-close shade-hover" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Github: <a href="https://github.com/aceberg/DiaryMD">https://github.com/aceberg/DiaryMD</a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default ConfigAbout;