function CreateShortcut(filename)
{
    wsh = new ActiveXObject('WScript.Shell');
    link = wsh.CreateShortcut(wsh.SpecialFolders("Startup") + '\\goproxy.lnk');
    link.TargetPath = '"' + filename + '"';
    link.Arguments = '';
    link.WindowStyle = 7;
    link.Description = 'GoProxy';
    link.WorkingDirectory = wsh.CurrentDirectory;
    link.Save();
}

function main()
{
    wsh = new ActiveXObject('WScript.Shell');
    fso = new ActiveXObject('Scripting.FileSystemObject');

    if(wsh.Popup('是否将 goproxy.exe 加入到启动项？(本对话框 6 秒后消失)', 6, 'GoProxy 对话框', 1+32) == 1) {
        filename = wsh.CurrentDirectory + '\\goproxy.exe'
        if (!fso.FileExists(filename)) {
            wsh.Popup('当前目录下不存在 goproxy.exe ', 5, 'GoProxy 对话框', 16);
            return
        }
        CreateShortcut(filename);
        wsh.Popup('成功加入 GoProxy 到启动项', 5, 'GoProxy 对话框', 64);
    }
}

main();
