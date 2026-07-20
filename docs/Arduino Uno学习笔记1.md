
刚开始学习嵌入式硬件
Arduino语法是建立在C/C++上的，语法差不多

我使用的编译环境是Arduino IDE 2.X ，可以从官网上直接下载
对应教程也在官网上面有

Arduino程序主要分为两部分

void setup( )  和  void loop()

void setup( )是程序的入口，主要编写对应针脚的信号模式，设置串口通信等操作，这里只跑一遍
void loop( )在我看来就是硬件的循环程序，这里无限循环，反复执行

设置信号模式
pinMode（redPin，INTPUT）；
输入模式，redPin是设定的针脚输入信号

设置串口通信
Serial.begin(9600);
9600是串口通信端口

设置延时
delay（1000）
这个1000只代表频率延时，跟板子时钟有关

除了这些你当然也可以像C和C++一样，编写自定义头文件，设置全局变量，编写外部函数，但是编写外部函数的时候不需要进行提前声明了
、
例如
void setup（）
void loop（）
void Rgblight（）

这时候我们不需要在void setup上面去进行声明，当这个函数在loop上被调用也是正确的操作

高电平和低电平分别使用HIGH和LOW表示
HIGH=1 输出电压
LOW=0 输出电压（接地）

digitalWrite（引脚号，电平信号）
这个用来设置引脚的电压信号，例如控制灯的开关：

digitalWrite（ledPin，LOW）;关灯
digitalWrite（ledPin，HIGH）;开灯


