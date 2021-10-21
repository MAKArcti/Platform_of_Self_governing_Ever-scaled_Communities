pragma ton-solidity ^ 0.51.0;
pragma AbiHeader expire;
pragma AbiHeader time;

contract Contest {

    event NewContest(string name, uint fee, uint reward);

    struct Contest {
        string name;
        uint fee;
        uint reward;
        uint status;
    }

    Contest[] public _contests;

    function _createContest (string _name, uint _fee, uint _reward) private {
        _contests.push(Contest(_name, _fee, _reward, 0));
        uint id = _contests.length - 1;
        emit NewContest(_name, _fee, _reward);
    }

    function createDefaultContest (string _name) public returns (uint) {
        tvm.accept();
        uint _fee = 10;
        uint _reward = 1000;
        _createContest(_name, _fee, _reward);
    }    
}
