// Created by iWeb 2.0.4 local-build-20100311

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id2" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="75" height="16" style="height: 16px; left: 725px; position: absolute; top: 462px; width: 75px; z-index: 1; "><param name="src" value="Media/02%20Donk%20%28Instrumental%29.mp3" /><param name="controller" value="true" /><param name="autoplay" value="true" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="true" /></object>');}
else if(isiPhone)
{document.write('<object id="id2" type="video/quicktime" width="75" height="16" style="height: 16px; left: 725px; position: absolute; top: 462px; width: 75px; z-index: 1; "><param name="src" value="Media/02%20Donk%20%28Instrumental%29.mp3"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id2" type="video/quicktime" width="75" height="16" data="Media/02%20Donk%20%28Instrumental%29.mp3" style="height: 16px; left: 725px; position: absolute; top: 462px; width: 75px; z-index: 1; "><param name="src" value="Media/02%20Donk%20%28Instrumental%29.mp3"/><param name="controller" value="true"/><param name="autoplay" value="true"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="true"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Enter_files/EnterMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');fixAllIEPNGs('Media/transparent.gif');performPostEffectsFixups()}
