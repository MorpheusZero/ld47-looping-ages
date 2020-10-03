import Swal from 'sweetalert2';

/**
 * Handles sending simple popup alert messages in the form of a modal.
 */
export class AlertManager {
  private static postMessage(
    title: string,
    message: string,
    icon: string
  ): void {
    Swal.fire({
      title,
      text: message,
      icon: icon as any,
      showCancelButton: false,
      confirmButtonText: 'OK',
    });
  }

  public static info(title: string, message: string): void {
    AlertManager.postMessage(title, message, 'info');
  }

  public static warning(title: string, message: string): void {
    AlertManager.postMessage(title, message, 'warning');
  }

  public static error(title: string, message: string): void {
    AlertManager.postMessage(title, message, 'error');
  }

  public static success(title: string, message: string): void {
    AlertManager.postMessage(title, message, 'success');
  }

  public static question(title: string, message: string): void {
    AlertManager.postMessage(title, message, 'question');
  }
}
