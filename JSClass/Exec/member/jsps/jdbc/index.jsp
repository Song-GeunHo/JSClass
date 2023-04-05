<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.sql.*" %>
<%@ page import="javax.sql.*" %>
<%@ page import="javax.naming.*" %>
                        <!DOCTYPE html>
                        <html lang="en">

                        <head>
                            <meta charset="UTF-8" />
                            <title>
                                <%=request.getServletContext().getServerInfo() %>
                            </title>
                        </head>

                        <body>
                            <%
                                Connection conn = null;
                                PreparedStatement ps = null;
                                String sql = "SELECT id FROM "
                                try {
                                    Context init = new InitialContext();
                                    Context env = (Context)init.lookup("java:comp/env");
                                    DataSource ds = (DataSource)env.lookup("jdbc/OracleDB");
                                    conn=ds.getConnection(); 
                                    out.println("<h3>연결되었습니다.</h3>");
                                } catch(Exception e){
                                    out.println("<h3>실패</h3>");
                                    e.printStackTrace();
                                }
                                %>
                        </body>

                        </html>