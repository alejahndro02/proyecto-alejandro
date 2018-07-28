let Ball = function(ballType)
    {
        this.ballType = ballType || 'regular';

    };
let sBall = function(ballType)
    {
        this.ballType = ballType || 'super';

    };
if(Ball == true)
    {
        console.log('regular')
    }
else if ( sBall == false)
    {
        console.log('super')
    }
else 
    {
        console.log('indefinido')
    }
