import * as vscode from 'vscode';

export class ColorWheelViewProvider implements vscode.WebviewViewProvider {
public resolveWebviewView(
  webviewView: vscode.WebviewView,
): void {
      webviewView.webview.html = '<h1>Color Wheel</h1>';
}
}
