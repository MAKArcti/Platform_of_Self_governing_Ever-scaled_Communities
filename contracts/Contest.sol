pragma ton-solidity ^ 0.47.0;
pragma AbiHeader expire;
pragma AbiHeader time;

contract Contest {

    event NewContest(string name, string fee, uint reward);
    
    struct Contest {
        string name;
        uint8 fee;
        uint8 reward;
        uint8 status;
    }

    Contest[] public _contests;

    function _createContest (string _name, uint _fee, uint _reward) private {
        _contests.push(Chimera(_name, _fee, _reward, 0));
        uint id = _contests.length - 1;
        emit NewContest(_name, _fee, _reward);
    }

    function createDefaultContest (string _name) public returns (uint) {
        uint8 _fee = 10;
        uint8 _reward = 1000;
        tvm.accept();
        _createContest(_name, _fee, _reward);
    }

    function createContest (string _name, uint _fee, uint _reward) public returns (uint) {
        tvm.accept();
        _createContest(_name, _fee, _reward);
    }
    
}
