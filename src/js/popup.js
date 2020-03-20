/**
 * Created by mapbar_front on 2020-03-21.
 */
var list = config;
var str = '';
for (let i = 0; i < list.length;i++) {
    str += `<div class="panel panel-primary" style="width: 100%;">
            <div class="panel-heading">
                <h3 class="panel-title">${list[i].name}</h3>
            </div>
            <div class="panel-body">
                <div class="input-group">
                    <span style="width: 100px" class="input-group-addon">地址</span>
                    <input type="text" class="form-control" placeholder="url" value="${list[i].url}" aria-describedby="basic-addon1">
                </div>

                <div class="input-group">
                    <span style="width: 100px" class="input-group-addon">账户</span>
                    <input type="text" class="form-control" placeholder="username" value="${list[i].username}" aria-describedby="basic-addon1">
                </div>

                <div class="input-group">
                    <span style="width: 100px" class="input-group-addon">密码</span>
                    <input type="text" class="form-control" placeholder="password" value="${list[i].password}" aria-describedby="basic-addon1">
                </div>
            </div>
        </div>`
}

document.getElementById('content').innerHTML = str;
