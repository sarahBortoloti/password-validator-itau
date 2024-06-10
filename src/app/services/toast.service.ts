import { Injectable } from '@angular/core';

interface Toast {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  delay?: number;
  autohide?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toasts: Toast[] = [];

  show(options: Toast) {
    const toast: Toast = {
      message: options.message,
      type: options.type,
      delay: options.delay || 3000,
      autohide: true,
    };

    this.toasts.push(toast);

    if (toast.autohide) {
      setTimeout(() => this.remove(toast), toast.delay);
    }
  }

  remove(toast: Toast) {
    this.toasts = this.toasts.filter((currentToast) => currentToast !== toast);
  }
}
