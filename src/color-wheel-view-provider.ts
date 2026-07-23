import * as vscode from 'vscode';

export class ColorWheelViewProvider implements vscode.WebviewViewProvider {
    public static readonly viewType = 'color-wheel.sidebar';
    public resolveWebviewView(
        webviewView: vscode.WebviewView,
    ): void {
        webviewView.webview.options = {
            enableScripts: false,
        };
        webviewView.webview.html = this.getHtml();
    }

    private getHtml(): string {
        return `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          >

          <meta
            http-equiv="Content-Security-Policy"
            content="default-src 'none'; style-src 'unsafe-inline';"
          >

          <title>Color Wheel</title>

          <style>
            body {
              padding: 16px;
              color: var(--vscode-foreground);
              background: var(--vscode-sideBar-background);
              font-family: var(--vscode-font-family);
            }

            h1 {
              margin: 0 0 8px;
              font-size: 18px;
            }

            p {
              margin: 0;
              color: var(--vscode-descriptionForeground);
              line-height: 1.5;
            }
          </style>
        </head>

        <body>
          <h1>Color Wheel</h1>
          <p>Your palette will appear here.</p>
        </body>
      </html>`;
    }
}
