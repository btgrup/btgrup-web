'use client';

import Swal, { SweetAlertIcon } from 'sweetalert2';

/**
 * Toastr Benzeri Şık Bildirimler (Ekranın sağ üst köşesinde, otomatik kapanan bildirim çubuğu)
 */
export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
  customClass: {
    popup: '!rounded-2xl !shadow-2xl !border !border-slate-200 !bg-white/95 !backdrop-blur-sm !py-3 !px-4 !font-sans',
    title: '!text-xs !font-bold !text-slate-800 !m-0',
    timerProgressBar: '!bg-brand-500'
  }
});

export const showSuccessToast = (title: string) => {
  return Toast.fire({
    icon: 'success',
    title
  });
};

export const showErrorToast = (title: string) => {
  return Toast.fire({
    icon: 'error',
    title
  });
};

export const showInfoToast = (title: string) => {
  return Toast.fire({
    icon: 'info',
    title
  });
};

/**
 * SweetAlert2 Şık Silme Onay Modalı
 */
export const confirmDelete = async (options?: {
  title?: string;
  text?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
}): Promise<boolean> => {
  const result = await Swal.fire({
    title: options?.title || 'Bu Kaydı Silmek İstiyor Musunuz?',
    text: options?.text || 'Bu işlem kalıcıdır ve geri alınamaz.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#dc2626', // Tailwind red-600
    cancelButtonColor: '#64748b',  // Tailwind slate-500
    confirmButtonText: options?.confirmButtonText || 'Evet, Sil',
    cancelButtonText: options?.cancelButtonText || 'Vazgeç',
    reverseButtons: true,
    focusCancel: true,
    customClass: {
      popup: '!rounded-3xl !p-6 !shadow-2xl !border !border-slate-200 !bg-white !font-sans',
      title: '!text-lg !font-extrabold !text-slate-900',
      htmlContainer: '!text-sm !text-slate-500 !mt-2',
      confirmButton: '!px-5 !py-2.5 !rounded-xl !font-bold !text-xs !shadow-md !transition-all hover:!opacity-95',
      cancelButton: '!px-5 !py-2.5 !rounded-xl !font-bold !text-xs !shadow-xs !transition-all hover:!bg-slate-600',
      actions: '!gap-2 !mt-5'
    }
  });

  return result.isConfirmed;
};

/**
 * SweetAlert2 Genel İşlem Onay Modalı
 */
export const confirmAction = async (options: {
  title: string;
  text: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  icon?: SweetAlertIcon;
  confirmButtonColor?: string;
}): Promise<boolean> => {
  const result = await Swal.fire({
    title: options.title,
    text: options.text,
    icon: options.icon || 'question',
    showCancelButton: true,
    confirmButtonColor: options.confirmButtonColor || '#2563eb', // Tailwind blue-600
    cancelButtonColor: '#64748b',
    confirmButtonText: options.confirmButtonText || 'Evet, Onayla',
    cancelButtonText: options.cancelButtonText || 'Vazgeç',
    reverseButtons: true,
    focusCancel: true,
    customClass: {
      popup: '!rounded-3xl !p-6 !shadow-2xl !border !border-slate-200 !bg-white !font-sans',
      title: '!text-lg !font-extrabold !text-slate-900',
      htmlContainer: '!text-sm !text-slate-500 !mt-2',
      confirmButton: '!px-5 !py-2.5 !rounded-xl !font-bold !text-xs !shadow-md !transition-all hover:!opacity-95',
      cancelButton: '!px-5 !py-2.5 !rounded-xl !font-bold !text-xs !shadow-xs !transition-all hover:!bg-slate-600',
      actions: '!gap-2 !mt-5'
    }
  });

  return result.isConfirmed;
};

/**
 * SweetAlert2 Bilgilendirme Modalı
 */
export const showAlert = (options: {
  title: string;
  text?: string;
  icon?: SweetAlertIcon;
  confirmButtonText?: string;
}) => {
  return Swal.fire({
    title: options.title,
    text: options.text,
    icon: options.icon || 'info',
    confirmButtonColor: '#2563eb',
    confirmButtonText: options.confirmButtonText || 'Tamam',
    customClass: {
      popup: '!rounded-3xl !p-6 !shadow-2xl !border !border-slate-200 !bg-white !font-sans',
      title: '!text-lg !font-extrabold !text-slate-900',
      htmlContainer: '!text-sm !text-slate-500 !mt-2',
      confirmButton: '!px-5 !py-2.5 !rounded-xl !font-bold !text-xs !shadow-md'
    }
  });
};
