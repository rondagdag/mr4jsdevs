// -----JS CODE-----

//@input SceneObject targetObj;
//@input string tweenName;

var event = script.createEvent("MouthOpenedEvent");
event.faceIndex = 0;
event.bind(function (eventData)
{
    global.tweenManager.startTween(script.targetObj, script.tweenName);
    print("Mouth was opened on face 0");
});