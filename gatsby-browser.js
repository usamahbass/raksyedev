export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Aplikasi ini telah diperbarui nuh. ` +
      `Muat ulang untuk menampilkan versi terbaru?`
  )
  if (answer === true) {
    window.location.reload()
  }
}

export const registerServiceWorker = () => true
