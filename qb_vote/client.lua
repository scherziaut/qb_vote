local voteUIActive = false

QBCore = exports['qb-core']:GetCoreObject()

RegisterCommand("vote", function()
    if not voteUIActive then
        SetNuiFocus(true, true) 
        SendNUIMessage({ action = "open" }) 
        voteUIActive = true
    else
        SetNuiFocus(false, false) 
        SendNUIMessage({ action = "close" }) 
        voteUIActive = false
    end
end)


RegisterNUICallback("submitVote", function(data)
    SetNuiFocus(false, false)
    SendNUIMessage({ action = "close" })
    voteUIActive = false

    QBCore.Functions.Notify("Ihre Stimme wurde erfolgreich eingereicht!", "success", 5000) -- 5 Sekunden
end)
