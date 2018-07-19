({
    doInit : function(component, event, helper) {
        let action = component.get("c.findAll");

        action.setCallback(this, function(response) {
           component.set("v.accounts", response.getReturnValue());

           let event = $A.get("e.c:AccountsLoaded");
           event.setParams({"accounts": response.getReturnValue()});
           event.fire();
        });

        $A.enqueueAction(action);
    }
})
